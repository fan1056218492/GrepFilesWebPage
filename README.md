# FindText WebPage

Static multilingual marketing page for FindText, built and deployed with Cloudflare Pages.

The page uses real screenshots captured from a synthetic English demo workspace at `/Users/Shared/FindTextDemo`, including a Guided Search question-flow screenshot. It is positioned for both everyday Mac users who need Question Mode and plain-language search for notes and documents, and technical users who search code, logs, configs, and reports with regex or advanced filters.

## Cloudflare Pages

Connect the repository `fan1056218492/GrepFilesWebPage` to Cloudflare Pages and use:

- Framework preset: None
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

The build copies the static site files into `dist/`. `wrangler.toml` also declares `pages_build_output_dir = "./dist"` so Wrangler and Cloudflare Pages use the same output folder.
