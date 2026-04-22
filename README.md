# Arden Site

A Next.js 14 starter for the Arden site.

## Run it locally

You'll need [Node.js](https://nodejs.org) (v18 or newer).

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser. Edit `pages/index.js` and save — the page will reload automatically.

## Project structure

```
arden-site/
├── pages/
│   ├── _app.js         # wraps every page (loads global CSS)
│   └── index.js        # homepage — edit this
├── styles/
│   └── globals.css     # global styles
├── package.json        # dependencies + scripts
└── next.config.js      # Next.js config
```

## Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

The fastest path:

1. Push your changes to GitHub.
2. Go to https://vercel.com/new, pick this repo, click Deploy.
3. Vercel auto-deploys on every future push to `main`.

## Adding pages

Drop a new file in `pages/`. For example, `pages/about.js` becomes `/about`.

```jsx
// pages/about.js
export default function About() {
  return <h1>About Arden</h1>;
}
```
