# Environment

No environment variables or API credentials are required. Bakery and social
content live in `src/components/Bread/content.js` and `src/components/Links`.
The retired GraphCMS and Twitch integrations are no longer used.

The React 17 / Create React App 4 toolchain is retained. With Node 20, use
`NODE_OPTIONS=--openssl-legacy-provider` when starting or building the app.
Netlify sets this in `netlify.toml`.
The scoped `postcss-safe-parser` override fixes the legacy PostCSS package
exports on current Node without upgrading the CRA toolchain.

Never place secrets in `REACT_APP_*` variables: Create React App embeds them in
the public browser bundle. Local `.env` files are ignored by Git.
