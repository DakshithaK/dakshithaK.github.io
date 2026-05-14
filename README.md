# Dakshitha K — Portfolio

Personal portfolio site for a full-stack engineer focused on distributed systems, data platforms, and AI-native tooling. Vanilla HTML/CSS/JS — no framework, no build step.

> [Live site](https://dakshithak.github.io/) 

![Hero — light mode](docs/screenshots/hero-light.png)

---

## About

A handcrafted single-page portfolio with light/dark themes, an interactive hero scene, animated career timeline, project cards with image crossfade slideshows, and a playable garden in the footer. Designed to feel personal and tactile rather than templated.

## Features

- **Two distinct atmospheres** — a green-ribbon daylight scene in light mode, a starfield with glow orbs in dark mode. Theme respects system preference on first load, then user choice via the mechanical-style toggle.
- **Intro animation** — letter-by-letter reveal of the name on first load (skipped on reload via `scrollRestoration = "manual"` + hash-stripping).
- **Custom cursor** — a forest-green dot that scales on hover targets. Disabled on touch devices and when `prefers-reduced-motion` is set.
- **Project cards with image slideshows** — each card supports a single image or an N-image crossfade (2-, 3-, and 4-image rotations supported). Crossfades use staggered animation delays so transitions overlap smoothly instead of flashing through a blank state.
- **Interactive career timeline** — click any role/education milestone to expand its detail panel inline.
- **Playable footer garden** — click anywhere in the field to "water" it; nearby ASCII sprouts grow through stages.
- **Tilt-on-hover** for project cards and the handwritten-style notes in the hero.
- **Fully responsive** — hero collage collapses to a vertical stack on mobile, nav becomes a hamburger sheet.
- **Accessible** — respects `prefers-reduced-motion`, semantic landmarks, alt text on all images, keyboard-navigable timeline.

## Screenshots

Place screenshots in `docs/screenshots/`. Recommended captures and where they go:

| Screenshot | Filename | What to capture |
| --- | --- | --- |
| Hero (light) | `docs/screenshots/hero-light.png` | Homepage in light mode showing the green ribbon waves, leaves, and the three handwritten notes (`note-main`, `note-side`, `note-tag`, `note-icon`). Full viewport. |
| Hero (dark) | `docs/screenshots/hero-dark.png` | Same homepage in dark mode — starfield + glow orbs replace the ribbons. Full viewport. |
| Tech stack | `docs/screenshots/tech-stack.png` | The Tech Stack section with all four pill rows visible. |
| Projects grid | `docs/screenshots/projects.png` | The Projects section with all four cards visible. Capture mid-slideshow if possible (e.g., when ContractorIQ is showing its chat view) so the crossfade feel is implied. |
| Experience timeline | `docs/screenshots/experience-timeline.png` | The career timeline with one milestone expanded (e.g., the Maersk SDE role). |
| Footer garden | `docs/screenshots/garden-footer.png` | The footer with several sprouts already grown, ideally with a ripple animation mid-flight. |

Embed them throughout the README — the hero shot at the top, the others under their respective feature mentions, e.g.:

```markdown
## Two themes, one feel
![Light mode](docs/screenshots/hero-light.png)
![Dark mode](docs/screenshots/hero-dark.png)
```

## Tech stack

- **HTML5** — single `index.html`, semantic sectioning.
- **CSS** — `styles.css`. CSS custom properties for theming (light/dark via `:root[data-theme="dark"]`), `color-mix()` for surface tinting, `clamp()` for fluid typography, `aspect-ratio` for thumbnail consistency, `@keyframes` for ribbon drift / leaves / starfield / project slideshows / intro letters / garden sway / water ripples.
- **JavaScript** — `script.js`, vanilla ES2022. No build tooling. Uses `IntersectionObserver` for reveal animations and active-nav tracking, `matchMedia` for theme + reduced-motion preference, `requestAnimationFrame` for cursor and tilt smoothing.
- **Fonts** — [Inter](https://fonts.google.com/specimen/Inter) for body, [Fraunces](https://fonts.google.com/specimen/Fraunces) for headings.

## Project structure

```
.
├── index.html        # Single-page markup, all sections
├── script.js         # Projects data + all interactive setup functions
├── styles.css        # Theme tokens, layout, animations
├── images/           # Project screenshots used by the cards
│   ├── ContractorIQ_Home.png
│   ├── ContractorIQLog.png
│   ├── RAG1.png
│   ├── RAG2.png
│   ├── ChillSessions_home.png
│   ├── ChillSessions.png
│   ├── chillSessions_Login.png
│   └── Quant/
│       ├── equity_curve.png
│       ├── zscore.png
│       ├── regression_train.png
│       └── regression_test.png
└── docs/
    └── screenshots/  # README screenshots
```

## Local development

No build step required.

```bash
# clone
git clone https://github.com/DakshithaK/Portfolio.git
cd Portfolio

# any static server works
python3 -m http.server 8000
# or
npx serve
```

Open `http://localhost:8000` and edit any file — refresh to see changes.

## Customization

### Adding a project

Edit the `projects` array at the top of `script.js`:

```js
{
  type: "AI · Side project",
  date: "Side project",
  title: "Your Project Name",
  description: "One paragraph. Keep it tight — what it does, the headline metric.",
  link: "https://github.com/you/repo",
  thumbClass: "thumb-emerald",          // see styles.css for color options
  images: [                              // optional — single image: use `image:` instead
    "./images/proj-1.png",
    "./images/proj-2.png",
  ],
  imageAlt: "Project description",
}
```

Available thumbnail gradients: `thumb-orange`, `thumb-teal`, `thumb-lilac`, `thumb-violet`, `thumb-sky`, `thumb-emerald`, `thumb-black`. Add new ones in `styles.css` alongside the existing rules.

The slideshow supports 2-, 3-, and 4-image rotations automatically based on the array length. For N > 4, add a `project-slide-N` keyframes block and a `[data-slide-count="N"]` rule in `styles.css`.

### Theming

Theme tokens live at the top of `styles.css` under `:root` (light) and `:root[data-theme="dark"]`. Override any custom property to retheme the whole site.

### Updating bio / sections

All copy is in `index.html`. Career timeline data lives in the `.timeline-detail` articles around line 280.

## Featured projects

These are the projects rendered on the site, in order:

1. **[Contractor Performance Scoring Engine](https://github.com/DakshithaK/contractor_performance_scoring_engine)** — 6-service AI risk platform (Spring Boot + FastAPI + Claude Vision + Kafka + Redis). Sub-12ms p95 at 3,000+ RPS.
2. **[RAG-Based Logs Analyser](https://github.com/DakshithaK/AI-Log-Analyser)** — privacy-preserving local RCA stack (LangChain + ChromaDB + Ollama/Gemma + Drain3 + Isolation Forest). 70% RCA accuracy at sub-2s p95.
3. **[Market-Neutral Stat-Arb](https://github.com/DakshithaK/Quantitative-Finance)** — Engle-Granger cointegration + Z-score signals on NSE banking pairs, 250-day backtest.
4. **Chill Sessions Bot** — full-stack AI mental health chatbot with multi-provider LLM routing and crisis detection.

## License

Personal portfolio — code is open to read for reference. Please don't redeploy as-is with my name and projects. The hero copy, project descriptions, and bio are mine.
