# Dakshitha K — Portfolio

Personal portfolio for a full-stack engineer focused on distributed systems, data platforms, and AI-native tooling. Vanilla HTML/CSS/JS — no framework, no build step, a single self-contained `index.html`.

**Live site:** https://dakshithak.github.io

---

## About

A handcrafted single-page portfolio with warm paper neutrals, a chartreuse accent, and an editorial serif + mono type system. Light and dark themes, a leaf-fall intro, an animated system-architecture diagram, and a quietly interactive feel throughout — designed to look made, not templated.

## Features

- **Light & dark mode** — toggle in the nav (or press `T`). Respects your system preference on first load, then remembers your choice via `localStorage`. A dedicated readable accent is used for text on light surfaces so contrast stays strong in both themes.
- **Leaf-fall intro** — the name reveals over a field of drifting leaves on load, then dissolves into the page.
- **Animated architecture diagram** — the featured project renders its real six-service pipeline (Ingest → Kafka → Claude Vision + Scoring → Redis → verdict) instead of a screenshot. Hover any service to highlight its path.
- **Collapsible career timeline** — the current role is open by default; click (or keyboard-focus + Enter) any milestone to expand its details.
- **Custom cursor** — a chartreuse dot with a trailing ring that grows over links, buttons, cards, and diagram nodes. Disabled on touch devices and when `prefers-reduced-motion` is set.
- **Tactile interactions** — 3D tilt + cursor spotlight on project cards, magnetic buttons, a scroll-progress bar, a section dot-navigator with scrollspy, and playful leaf bursts on click.
- **Click-to-copy email** with a toast confirmation, plus keyboard shortcuts (`T` theme, `G` back to top).
- **Animated counters** on the about stats, and an auto-scrolling skills marquee.
- **Accessible & motion-aware** — every animation is gated behind `prefers-reduced-motion`, the timeline is keyboard-operable, and semantic landmarks / alt text are used throughout.

## Sections

Hero · About (animated stats) · Selected work (featured + project cards) · Skills (marquee + grid) · Experience & education (collapsible timeline) · Writing · Contact

## Tech stack

- **HTML5** — a single, self-contained `index.html`; fonts, styles, and scripts are all inlined for zero-dependency hosting.
- **CSS** — inline styles with CSS custom properties for theming (`:root` / `:root[data-theme="dark"]`), `color-mix()` for surface tinting, `clamp()` for fluid type, and `@keyframes` for the loader leaves, marquee, scroll cue, and diagram pulses.
- **JavaScript** — vanilla ES2022, no build tooling. Scroll-driven reveals, `matchMedia` for theme + reduced-motion preferences, and `requestAnimationFrame` for cursor and tilt smoothing.

## Local development

No build step required — it's a single file.

```bash
# clone
git clone https://github.com/DakshithaK/dakshithaK.github.io.git
cd dakshithaK.github.io

# any static server works
python3 -m http.server 8000
# or
npx serve
```

Open http://localhost:8000 and edit `index.html` — refresh to see changes.

## License

Personal portfolio — code is open to read for reference. Please don't redeploy as-is with my name and projects. The hero copy, project descriptions, and bio are mine.
