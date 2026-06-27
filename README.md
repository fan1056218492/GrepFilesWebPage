# FindText WebPage

Static multilingual marketing page for FindText, built and deployed with Cloudflare Pages.

The page uses real screenshots captured from a synthetic English demo workspace at `/Users/Shared/FindTextDemo`, including a Guided Search question-flow screenshot. It is positioned for both everyday Mac users who need Question Mode and plain-language search for notes and documents, and technical users who search code, logs, configs, and reports with regex or advanced filters.

## Cloudflare Pages

Production URL: <https://grepfileswebpage.pages.dev/>

Connect the repository `fan1056218492/GrepFilesWebPage` to Cloudflare Pages and use:

- Framework preset: None
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

The build copies the static site files into `dist/`. `wrangler.toml` also declares `pages_build_output_dir = "./dist"` so Wrangler and Cloudflare Pages use the same output folder.

Validate multilingual coverage with:

```sh
npm run check:i18n
```

Deploy with:

```sh
npm run deploy
```

Wrangler may print a deployment-specific preview URL such as `https://<hash>.grepfileswebpage.pages.dev`. That URL changes on every deployment. Use the fixed production URL above for sharing and product links.
