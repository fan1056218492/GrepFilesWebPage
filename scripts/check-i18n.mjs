import fs from "node:fs";
import vm from "node:vm";

const html = fs.readFileSync("index.html", "utf8");
const script = fs.readFileSync("script.js", "utf8");
const prefixEnd = script.indexOf("\nlet currentLocale");

if (prefixEnd === -1) {
  throw new Error("Could not find the end of the translation/config block in script.js.");
}

const sandbox = { URL };
vm.createContext(sandbox);
vm.runInContext(
  `${script.slice(0, prefixEnd)}
globalThis.__translations = translations;
globalThis.__localeConfig = LOCALE_CONFIG;
globalThis.__supportedLocales = SUPPORTED_LOCALES;
globalThis.__galleryShots = GALLERY_SHOTS;
globalThis.__guidedShots = GUIDED_SHOTS;`,
  sandbox,
  { filename: "script.js" }
);

const translations = sandbox.__translations;
const localeConfig = sandbox.__localeConfig;
const supportedLocales = sandbox.__supportedLocales;
const galleryShots = sandbox.__galleryShots;
const guidedShots = sandbox.__guidedShots;

function collectAttributeValues(attribute) {
  const values = new Set();
  const matcher = new RegExp(`${attribute}="([^"]+)"`, "g");
  let match;

  while ((match = matcher.exec(html))) {
    values.add(match[1]);
  }

  return values;
}

function getPath(source, path) {
  return path.split(".").reduce((value, part) => (value == null ? undefined : value[part]), source);
}

const requiredPaths = new Set([
  ...collectAttributeValues("data-i18n"),
  ...collectAttributeValues("data-i18n-aria"),
  ...collectAttributeValues("data-i18n-alt"),
  "meta.title",
  "meta.description",
  "meta.ogTitle",
  "meta.ogDescription"
]);

for (const shot of galleryShots) {
  requiredPaths.add(`gallery.${shot}.label`);
  requiredPaths.add(`gallery.${shot}.title`);
  requiredPaths.add(`gallery.${shot}.text`);
  requiredPaths.add(`gallery.${shot}.alt`);
}

for (const shot of guidedShots) {
  requiredPaths.add(`guided.${shot}.label`);
  requiredPaths.add(`guided.${shot}.step`);
  requiredPaths.add(`guided.${shot}.title`);
  requiredPaths.add(`guided.${shot}.text`);
  requiredPaths.add(`guided.${shot}.alt`);
}

const failures = [];
const translationLocales = Object.keys(translations);
const configLocales = Object.keys(localeConfig);

for (const locale of supportedLocales) {
  if (!translations[locale]) failures.push(`${locale}: missing translations object`);
  if (!localeConfig[locale]) failures.push(`${locale}: missing LOCALE_CONFIG entry`);
}

for (const locale of translationLocales) {
  if (!supportedLocales.includes(locale)) failures.push(`${locale}: translation exists but is not in SUPPORTED_LOCALES`);
}

for (const locale of configLocales) {
  if (!supportedLocales.includes(locale)) failures.push(`${locale}: LOCALE_CONFIG exists but is not in SUPPORTED_LOCALES`);
}

for (const locale of supportedLocales) {
  for (const path of requiredPaths) {
    const value = getPath(translations[locale], path);
    if (typeof value !== "string" || value.trim() === "") {
      failures.push(`${locale}: missing translation for ${path}`);
    }
  }
}

if (failures.length) {
  console.error("i18n validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`i18n validation passed for ${supportedLocales.length} locales and ${requiredPaths.size} translation paths.`);
