# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A self-contained academic presentation for a UFSC law seminar — *"Do Poder-Dever ao Dever-Poder"* (administrative law, algorithmic decision-making, LGPD), by Ana Vanzin & Vinícius Oliveira. It is **pure static HTML/CSS/JS** with no build system, package manager, lint, or test runner. Content and docs are in Portuguese; deployed at `https://anavanzin.com/seminario8-dever-poder/`.

## Running / previewing

There is nothing to build. Open the HTML files directly in a browser, **except** the video, which requires an HTTP server (see below). For a clean local run that exercises the service worker and the video's fetch-inline path:

```bash
python3 -m http.server 8000   # then open http://localhost:8000/index-improved.html
```

`file://` breaks two things: the service worker won't register, and `Seminario8-Video.html` fetches its `.jsx` sources (CORS-blocked off `file://`). Always serve over http when touching the video or SW.

## The deck engine — `deck-stage.js`

The reusable `<deck-stage width="1920" height="1080">` web component drives every deck. Read its top-of-file doc comment before changing slide behavior — it owns a lot:

- **Navigation:** ←/→, PgUp/PgDn, Space, Home/End, number keys; `R` resets to slide 0; tap left/right half on touch.
- **Auto-scaling:** inner canvas is a fixed design size (1920×1080) scaled with `transform: scale()` and letterboxed. The `noscale` attribute renders 1:1 (used by the PPTX exporter).
- **Slides are hidden, not unmounted** — non-active `<section>`s stay in the DOM with `visibility:hidden;opacity:0`, so videos, iframes, and React trees keep their state across navigation. Do not assume a slide unmounts.
- **Print:** `@media print` lays out one slide per page at design size, so browser Print → Save as PDF "just works."
- **Events:** dispatches `slidechange` / `deckchange` CustomEvents (bubbling, composed out of shadow DOM). Speaker notes read from `<script type="application/json" id="speaker-notes">` and post `{slideIndexChanged}` to the parent window.
- Persistence is at the **host** level (URL `?slide=` / `location.hash`), not the component.

`Seminario8.html` is the main deck (35 `<section>` slides). It loads `deck-stage.js` and registers `sw.js`. The "Conselho de Contestação" interactive demo is an in-deck fullscreen overlay (slide ~31/32 → `cShow`/`cHide`), not a separate page navigation.

## The video pipeline — two HTML files, four JSX files

The 56s opening video is built from a small hand-rolled React animation engine. **There is no bundler** — JSX is transformed in the browser by `@babel/standalone`.

| File | Role |
|------|------|
| `animations.jsx` | Animation engine: `<Stage>`, `<Sprite start end>`, `useTime()`, `useSprite()`, hand-rolled `Easing` table (Popmotion-style). |
| `video-atoms.jsx` | Reusable visual atoms + the `TK` design-token object (the editorial-engraving "Pergaminho" DNA: paper `#fbfaf5`, ink `#16140f`, accent `#8b1a1a`). |
| `video-scenes.jsx` | The six scenes and their `SCENES` timing table (totals 56s @ 1920×1080). |
| `tweaks-panel.jsx` | `<TweaksPanel>` + `useTweaks()` edit-mode shell; owns the host edit-mode postMessage protocol and the `/*EDITMODE-BEGIN*/…/*EDITMODE-END*/` defaults-marker convention. |

Two HTML wrappers consume those JSX files — **keep this distinction straight**:

- `Video.html` — **dev version.** Loads React/ReactDOM/Babel from unpkg CDN and references the `.jsx` files via `<script type="text/babel" src="…">`. Edits to a `.jsx` file show up here live.
- `Seminario8-Video.html` — **distribution version (~2.7MB).** It fetches each `text/babel src` and **inlines** the source (because Babel standalone's `transformScriptTags` silently drops external-src scripts). This is the file linked from the deck and landing page. Editing a `.jsx` does **not** update it automatically — it has to be regenerated/re-inlined.

## Two design systems coexist on purpose

Do not "clean up" by deleting one — the README documents this as a deliberate choice:

- **v1.x "Pergaminho" (editorial):** EB Garamond + Spectral + JetBrains Mono, warm paper tones. Used by `Seminario8.html`, the print deck, and the video atoms (`TK` tokens). Landing: `index.html`.
- **v2.0 "Vercel-style" (achromatic):** Geist + Geist Mono, `#171717`/`#fff`, workflow accents blue `#0a72ef` / pink `#de1d8d` / red `#ff5b4f`, shadow-as-border (`box-shadow: 0 0 0 1px rgba(0,0,0,.08)`). Landing: `index-improved.html` (the primary entry point).

## File map (beyond the above)

- `Seminario8-print.html` — A4 print/PDF version of the deck.
- `Conselho.html` — standalone offline build of the Conselho demo; the presentation's "Plan B" if the in-deck overlay or live demo fails.
- `Wireframes.html` — three visual directions, shown during the debate.
- `assets/` — ornamental SVG/PNG (scales, caduceus, laurel, etc.).
- `uploads/` — research source material (`materiais-base/`, `planos/`, `prototipo/`, `apresentacao/`). `.gitignore` keeps the `.md`/prototype `.html` here but excludes `.pptx`/`.svg`/`.pdf` and top-level `screenshots/`.
- `SCRIPT-COMPLETO.md`, `MINHA-FALA.md`, `GUIA-VINICIUS.md`, `PLANO-ENTREGA.md` — speaker scripts and the run-of-show. Edit these together with deck content when slide order or speaker assignments change; they cross-reference slide numbers.

## Service worker gotcha

`sw.js` (cache `seminario8-v1`) only intercepts Google Fonts / `chart.googleapis.com` requests — it does **not** actually cache local assets, despite the README's "works fully offline" claim. If you change fonts, bump the cache name to force re-fetch.
