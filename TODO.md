# pabo -- TODO

Improvements for a static, zero-build, dumbphone-friendly utility site.
Grouped by priority; nothing here is implemented yet.

## 1. Correctness & HTML bugs

- [ ] Remove the duplicate `</head>` in `utils/weather/index.html`
- [ ] Remove the duplicate `</head>` in `utils/dictionary/index.html`
- [ ] Move the `Back home` links inside `<body>` on every util page
      (weather, dictionary, news, all 4 `news/sources/*.html`, qr -- they currently sit after `</body>`)
- [ ] Fix or remove the dead `<script src="script.js">` in root `index.html` (no such file; 404 on every load)
- [ ] Link `/style.css` (or a relative path) in `utils/qr/index.html` -- it is currently unstyled
- [ ] Add `lang="en"` where missing
- [ ] Add `<meta name="viewport">` to `utils/weather/index.html` and `utils/dictionary/index.html`

## 2. Privacy & third-party dependence

- [ ] **news**: remove reliance on `api.rss2json.com` -- self-host an RSS→JSON shim,
      or parse feeds client-side behind a CORS proxy we control
- [ ] **news**: remove reliance on `r.jina.ai` for the text-only article view,
      or document it clearly as a known dependency
- [ ] **qr**: replace the `theqrcode.io` call with a small client-side QR generator
      (~2 KB lib) so the encoded URL never leaves the device and it works offline
- [ ] Document every external API/dependency in the README
      (dictionaryapi.dev, Open-Meteo, and whatever remains after the above)

## 3. UX / feature gaps

- [ ] **weather**: replace the injected-`<script>` + `window.lat`/`window.lon` hack
      with a plain `load(lat, lon)` function
- [ ] **weather**: add input validation (empty / non-numeric lat-lon)
- [ ] **weather**: add a "use my location" (geolocation) button
- [ ] **weather**: add a °C / °F toggle
- [ ] Add loading states to news and qr (dictionary already has one)
- [ ] **news**: check `data.status` before `forEach`; show an error message instead of a blank list
- [ ] **news**: show an empty state when a feed returns no items
- [ ] Unify the header/footer/back-link across all pages
- [ ] Decide how README "to be added" features appear on the landing page
      (show as "coming soon" or omit)

## 4. Architecture & code quality

- [ ] Switch absolute paths (`/style.css`, `/index.html`) to relative paths
      or add `<base>` so the site works under a subpath (e.g. `/pabo/` on GitHub Pages)
- [ ] Replace the 4 near-identical `news/sources/*.html` pages with one
      parameterized page (e.g. `sources/index.html?feed=...`)
- [ ] Extract a shared `util.js` (error rendering, loading text, nav)
- [ ] Add a link/asset checker so missing files (like `script.js`) are caught
- [ ] Consider a simple CI check for HTML validity / broken links

## 5. Accessibility & old-device compatibility

- [ ] Add `<label>` elements for all inputs (placeholder-only is not enough)
- [ ] Give the QR `<img>` a meaningful `alt` (describe the encoded value or "QR code")
- [ ] Audit focus styles / keyboard operation for buttons and inputs
- [ ] Keep avoiding flex/grid/layout modules -- this is a feature for feature phones

## 6. Project hygiene

- [ ] Add a favicon
- [ ] Add `<meta name="description">` and `<meta name="theme-color">`
- [ ] Add `manifest.json` + a service worker so repeat visits load from cache
      (directly serves the low-data-plan goal)
- [ ] Add setup / run instructions to the README
- [ ] Reference the `LICENSE` file from the README

## Highest-leverage first pass

1. [ ] Replace the third-party RSS and QR services with self-hosted / client-side equivalents
2. [ ] Fix the HTML validity bugs and the missing stylesheet / `script.js`
3. [ ] Relative paths + de-duplicate the news source pages
4. [ ] Loading/error/empty states, input labels, viewport metatags
5. [ ] Service worker + manifest for offline / low-data repeat visits
