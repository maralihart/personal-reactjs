# Bread by Mara

The sourdough bakery and curated social links for mara.fyi. Built with React 17,
React Router 5, Create React App 4, and GSAP.

## Development

Use **Node 24.21.0 LTS** and npm 11. The local version is pinned in
`.node-version`; `package.json` declares the supported Node and npm ranges.
With [fnm](https://github.com/Schniz/fnm), select the project runtime first:

```sh
fnm install 24.21.0
fnm use 24.21.0
```

Then install dependencies and run the project:

```sh
npm ci
NODE_OPTIONS=--openssl-legacy-provider npm start
CI=true npm test -- --watchAll=false --runInBand
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

The OpenSSL flag supports the retained CRA 4 / webpack 4 toolchain on modern
Node. The scoped `postcss-safe-parser` override fixes legacy PostCSS package
exports without upgrading the toolchain. Netlify sets the Node version and
OpenSSL flag in `netlify.toml`.

Node 20 reached end of life on April 30, 2026. As of September 2026, Node 24 is
the current LTS line, with support scheduled through April 30, 2028; Node 26
is not yet LTS.
See the [official Node release schedule](https://github.com/nodejs/Release#release-schedule).
Keep `.node-version` and Netlify's `NODE_VERSION` in sync when updating patches.
This project-level pin does not change the system-wide Node default.

No API keys or environment configuration are required. Never put secrets in
`REACT_APP_*` variables: Create React App embeds them in the public browser
bundle. Local `.env` files are ignored by Git.

## Project layout

```text
assets/source-photos/    Original photo sources; never included in the site build
public/images/bread/    Optimized bakery photos served directly by the site
public/.htaccess        Apache routing rules, copied into the production build
src/assets/             Bundled application assets, including Mara's portrait
src/pages/Bread/        Bakery pages, content, illustrations, motion, and tests
src/pages/SocialLinks/  Independent social page, destinations, disclosure, and tests
src/styles/             Shared base styles and design tokens
src/App.js              Top-level routing and redirects
```

Page-specific styles and tests stay alongside their page modules. Only assets
needed in production belong in `public/` or `src/assets/`.

## Routes and deployment

- `/` redirects to `/bread`, changing the address bar.
- `/bread` is the bakery; starter, recipe, and ingredient drilldowns live below it.
- `/social/links` is the curated social hub.
- `/links` and `/social` redirect to `/social/links`.
- Unknown top-level routes return visitors to `/bread`.

Netlify builds `build/` and applies redirects before the SPA fallback.
For Apache, deploy `build/`, including its generated `.htaccess` file.
Enable `mod_rewrite` and the corresponding override permissions so direct links
to nested routes serve the app. Redirect rules preserve HTTPS.

## Content

Bakery content is maintained in `src/pages/Bread/content.js`. Sandwich loaf
base ingredients, date/date syrup and zaatar variations, focaccia and dehydrated
starter ingredients, and allergen/cross-contact information reflect the owner's
supplied details.
Recipe examples are not substitutes for product specifications.
Confirm availability and ordering details directly with Mara;
the site does not promise prices, fulfillment times, or pickup locations.

The old fashion pages, media kit, resume, and GraphCMS connection are retired.
Social destinations are maintained locally in `src/pages/SocialLinks/data.js`.

## Design

The warm editorial palette and serif/sans typography take inspiration from the
[Claude analysis in awesome-design-md](https://github.com/voltagent/awesome-design-md/tree/main/design-md/claude).
Scoped GSAP animations follow the lifecycle and ScrollTrigger guidance in
[gsap-skills](https://github.com/greensock/gsap-skills). Reduced-motion preferences
disable spatial animation. Colors, typography, spacing, and motion values live
in `src/styles/tokens.css`.

The bakery line illustrations are original SVGs. Product photographs come from
Mara's uploads in `assets/source-photos/`; optimized, metadata-free WebP copies
live in `public/images/bread/`. `sourdough-menu.jpeg` (originally `IMG_0027.jpeg`)
is cropped to the bread photograph only (left 244, top 592, right 829, bottom 915)
for the hero image. `date-loaf-packaged.jpeg` supplies the rewards photo, and
`sourdough-slices.jpeg` is retained as an unused source for future edits.
Original image contents are unchanged; only their filenames and location changed.

The homepage advertises referrals (each friend receives a free upgrade and the
referrer receives $3 credit) and loaf loyalty (a free classic loaf for every
10 loaves purchased). Rewards are coordinated directly with Mara, not tracked
by the website.
