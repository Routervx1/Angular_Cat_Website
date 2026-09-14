# Purrfect World 🐱

A simple Angular v22 website about cats: a home page with rotating cat facts,
a photo gallery (images from the [cataas.com](https://cataas.com) public cat API),
and a page describing popular cat breeds.

Built with:
- Angular v22, standalone components (no NgModules)
- Signals for local state (`signal`, `computed`, `input`)
- The modern control-flow syntax (`@if`, `@for`)
- Lazy-loaded routes (`loadComponent`) for each page
- Zero external UI libraries — plain CSS

## Requirements

- Node.js **v22.22.3+**, v24.15.0+, or v26+ (Angular v22's minimum)
- npm 8+

## Run it locally

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Build for production

```bash
npm run build
```

Output goes to `dist/cat-website`.

## Project structure

```
src/
  app/
    app.ts / app.html / app.css      root shell
    app.config.ts                    providers (router, zone change detection)
    app.routes.ts                    lazy routes for Home / Gallery / Breeds
    nav/                             top navigation bar
    home/                            landing page + rotating cat facts
    gallery/                         photo grid (cataas.com images)
      cat-card/                      reusable photo card with a like button
    breeds/                          expandable list of cat breeds
    shared/cat-data.ts               cat facts & breed data
```

## Notes

- Gallery images are fetched live from `cataas.com`, a free public cat-photo
  API, so they'll change each time the page loads. Swap the URLs in
  `gallery.ts` for your own images if you'd rather have a fixed set.
- This was hand-authored to match Angular v22 conventions (suffix-less file
  names, `input()`/`signal()` APIs). It was not run through `ng build` in the
  sandbox that generated it, since that environment's Node.js patch version
  was one below Angular v22's minimum — run `npm install && npm start`
  locally to try it.
