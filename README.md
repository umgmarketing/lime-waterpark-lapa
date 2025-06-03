# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
  `npm run dev`

## Deploy to GitHub Pages

This project is ready to deploy as a static site. To publish a new build to the
`gh-pages` branch:

1. Ensure the `base` value in [vite.config.ts](vite.config.ts) matches your
   repository name.
2. Run `npm run deploy` to build and push the contents of the `dist` folder to
   GitHub.
3. In the repository settings, configure GitHub Pages to serve from the
   `gh-pages` branch.
