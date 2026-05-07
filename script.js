const projects = [
  {
    type: "Full stack",
    date: "Recent work",
    title: "Internal Ops Dashboard",
    description:
      "Built a dashboard for operational workflows with role-based access, reusable UI modules, and backend integrations that reduced manual coordination.",
    link: "#",
    thumbClass: "thumb-orange",
  },
  {
    type: "Backend",
    date: "Production systems",
    title: "API and Workflow Automation",
    description:
      "Designed and integrated service APIs, improved request handling, and supported workflow automation for faster delivery across teams.",
    link: "#",
    thumbClass: "thumb-teal",
  },
  {
    type: "Frontend",
    date: "Performance focus",
    title: "User-Facing Web Experience",
    description:
      "Implemented responsive interfaces, polished interaction states, and improved performance on core journeys with an emphasis on maintainable components.",
    link: "#",
    thumbClass: "thumb-lilac",
  },
  {
    type: "Engineering",
    date: "Collaboration",
    title: "Code Quality and Delivery",
    description:
      "Contributed through debugging, refactors, peer reviews, and release support to keep projects stable while shipping new capabilities.",
    link: "#",
    thumbClass: "thumb-violet",
  },
];

const gardenBlooms = [
  { art: ["` `", "\\|/", "^^^"], className: "sprout-lime", x: 4, y: 68, stage: 2 },
  {
    art: ["uuuu", "( )", "\\|/", "^^^"],
    className: "sprout-orange",
    x: 13,
    y: 74,
    stage: 0,
    stages: [
      ["uuu", "( )", "\\|/", "^^^"],
      ["uuuuu", "(   )", "\\|/", "^^^"],
      ["uuuuu", "(   )", "~Y~", " | ", "\\|/", "^^^^^"],
    ],
  },
  {
    art: ["uuu", "Y", "^^^^^"],
    className: "sprout-sky",
    x: 21,
    y: 82,
    stage: 0,
    stages: [
      ["u", "Y", "^^^^^"],
      ["uuu", "Y", "^^^^^"],
      ["uuu", " Y ", "^^^^^"],
    ],
  },
  { art: [".", "|", "^^"], className: "sprout-pink", x: 29, y: 57, stage: 1 },
  {
    art: ["(*)", " | ", "/ \\"],
    className: "sprout-cream",
    x: 39,
    y: 35,
    stage: 0,
    stages: [
      ["(*)", " | "],
      ["(*)", " | ", "/ \\"],
      [" (*) ", "< | >", " / \\"],
    ],
  },
  {
    art: ["www", "~Y~", "\\|/", "^^^^^"],
    className: "sprout-pink",
    x: 47,
    y: 86,
    stage: 0,
    stages: [
      ["uuu", "( )", "\\|/", "^^^^^"],
      ["wwwww", "(   )", "~Y~", "\\|/", "^^^^^"],
      ["wwwww", "(   )", "~Y~", " | ", "\\|/", "^^^^^"],
    ],
  },
  { art: ["\\\\ /", " | ", "vvv"], className: "sprout-lime", x: 56, y: 63, stage: 2 },
  {
    art: ["@@@@", "( )", "\\|/", "^^^^"],
    className: "sprout-orange",
    x: 64,
    y: 74,
    stage: 0,
    stages: [
      ["uuu", "( )", "\\|/", "^^^"],
      ["@@@@@", "(   )", "\\|/", "^^^^"],
      ["@@@@@", "(   )", "~Y~", " | ", "\\|/", "^^^^^"],
    ],
  },
  {
    art: ["u", "Y", "^^^^^"],
    className: "sprout-sky",
    x: 73,
    y: 46,
    stage: 0,
    stages: [
      ["u", "Y", "^^^^^"],
      ["uu", "Y", "^^^^^"],
      ["u", "Y", "^^^^^"],
    ],
  },
  { art: ["..", "vv", "^^"], className: "sprout-pink", x: 84, y: 51, stage: 1 },
  {
    art: ["(*)", ">/"],
    className: "sprout-cream",
    x: 92,
    y: 36,
    stage: 0,
    stages: [
      ["(*)"],
      ["(*)", ">|"],
      ["(*)", ">/"],
    ],
  },
  {
    art: ["uuu", "( )", "^^^^^"],
    className: "sprout-pink",
    x: 96,
    y: 75,
    stage: 0,
    stages: [
      ["uuu", "( )", "^^^^^"],
      ["wwwww", "(   )", "\\|/", "^^^^^"],
      ["wwwww", "(   )", " Y ", "\\|/", "^^^^^"],
    ],
  },
  { art: [".", "| |", "vv"], className: "sprout-lime", x: 9, y: 58, stage: 2 },
  {
    art: ["@", "\\|/", "^^^"],
    className: "sprout-pink",
    x: 58,
    y: 92,
    stage: 0,
    stages: [
      ["@", "|", "^^"],
      ["@", "\\|/", "^^^"],
      ["@", "\\|/", "^^^^"],
    ],
  },
  { art: ["\\|/", "^^^^^"], className: "sprout-sky", x: 44, y: 90, stage: 2 },
  {
    art: ["(*)", ">|"],
    className: "sprout-cream",
    x: 86,
    y: 79,
    stage: 0,
    stages: [
      ["(*)"],
      ["(*)", " | "],
      ["(*)", ">|"],
    ],
  },
  { art: ["` `", "\\|/", "^^^"], className: "sprout-lime", x: 7, y: 84, stage: 2 },
  { art: [".", "|", "^^"], className: "sprout-pink", x: 16, y: 52, stage: 1 },
  {
    art: ["uuuu", "( )", "\\|/", "^^^"],
    className: "sprout-orange",
    x: 24,
    y: 88,
    stage: 1,
    stages: [
      ["uuu", "( )", "\\|/", "^^^"],
      ["uuuuu", "(   )", "\\|/", "^^^"],
      ["uuuuu", "(   )", "~Y~", " | ", "\\|/", "^^^^^"],
    ],
  },
  { art: ["\\\\ /", " | ", "vvv"], className: "sprout-lime", x: 31, y: 72, stage: 2 },
  {
    art: ["@", "\\|/", "^^^"],
    className: "sprout-pink",
    x: 37,
    y: 95,
    stage: 1,
    stages: [
      ["@", "|", "^^"],
      ["@", "\\|/", "^^^"],
      ["@", "\\|/", "^^^^"],
    ],
  },
  {
    art: ["(*)", " | ", "/ \\"],
    className: "sprout-cream",
    x: 42,
    y: 29,
    stage: 1,
    stages: [
      ["(*)", " | "],
      ["(*)", " | ", "/ \\"],
      [" (*) ", "< | >", " / \\"],
    ],
  },
  { art: ["u", "Y", "^^^^^"], className: "sprout-sky", x: 49, y: 41, stage: 2 },
  { art: ["..", "vv", "^^"], className: "sprout-pink", x: 54, y: 83, stage: 1 },
  {
    art: ["uuu", "( )", "^^^^^"],
    className: "sprout-pink",
    x: 61,
    y: 58,
    stage: 1,
    stages: [
      ["uuu", "( )", "^^^^^"],
      ["wwwww", "(   )", "\\|/", "^^^^^"],
      ["wwwww", "(   )", " Y ", "\\|/", "^^^^^"],
    ],
  },
  { art: ["\\|/", "^^^^^"], className: "sprout-sky", x: 68, y: 90, stage: 2 },
  {
    art: ["(*)", ">/"],
    className: "sprout-cream",
    x: 71,
    y: 66,
    stage: 1,
    stages: [
      ["(*)"],
      ["(*)", ">|"],
      ["(*)", ">/"],
    ],
  },
  { art: ["` `", "\\|/", "^^^"], className: "sprout-lime", x: 77, y: 78, stage: 2 },
  {
    art: ["wwwww", "(   )", "~Y~", "\\|/", "^^^^^"],
    className: "sprout-pink",
    x: 82,
    y: 60,
    stage: 1,
    stages: [
      ["uuu", "( )", "\\|/", "^^^^^"],
      ["wwwww", "(   )", "~Y~", "\\|/", "^^^^^"],
      ["wwwww", "(   )", "~Y~", " | ", "\\|/", "^^^^^"],
    ],
  },
  { art: ["u", "Y", "^^^^^"], className: "sprout-sky", x: 89, y: 46, stage: 2 },
  { art: [".", "| |", "vv"], className: "sprout-lime", x: 93, y: 88, stage: 2 },
  {
    art: ["@@@@", "( )", "\\|/", "^^^^"],
    className: "sprout-orange",
    x: 98,
    y: 67,
    stage: 1,
    stages: [
      ["uuu", "( )", "\\|/", "^^^"],
      ["@@@@@", "(   )", "\\|/", "^^^^"],
      ["@@@@@", "(   )", "~Y~", " | ", "\\|/", "^^^^^"],
    ],
  },
];

const grownSprouts = [];
const THEME_STORAGE_KEY = "theme";
const STARFIELD_HEIGHT = 2000;

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const toggle = document.getElementById("theme-toggle");
  if (toggle instanceof HTMLInputElement) {
    toggle.checked = theme === "dark";
  }
}

function setupThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  if (!(toggle instanceof HTMLInputElement)) {
    return;
  }

  const initialTheme =
    document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(initialTheme);

  toggle.addEventListener("change", () => {
    const nextTheme = toggle.checked ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  });
}

function createSeededRandom(seed) {
  let value = seed;

  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
}

function buildStarShadow(count, seed) {
  const random = createSeededRandom(seed);
  const stars = [];

  for (let index = 0; index < count; index += 1) {
    const x = Math.round(random() * 1998);
    const y = Math.round(random() * (STARFIELD_HEIGHT - 2));
    stars.push(`${x}px ${y}px #fff`);
  }

  return stars.join(", ");
}

function setupStarfield() {
  const layers = [
    { selector: ".stars-small", count: 420, seed: 11, speed: "6s" },
    { selector: ".stars-medium", count: 180, seed: 29, speed: "9s" },
    { selector: ".stars-large", count: 90, seed: 47, speed: "13s" },
  ];

  layers.forEach((layer) => {
    const element = document.querySelector(layer.selector);
    if (!(element instanceof HTMLElement)) {
      return;
    }

    element.style.setProperty("--star-shadow", buildStarShadow(layer.count, layer.seed));
    element.style.setProperty("--star-speed", layer.speed);
  });
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card reveal";

  article.innerHTML = `
    <div class="project-thumb ${project.thumbClass}" aria-hidden="true"></div>
    <div class="project-topline">
      <span>${project.type}</span>
      <span>-</span>
      <span>${project.date}</span>
    </div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a class="project-link" href="${project.link}">View project</a>
  `;

  return article;
}

function renderProjects() {
  const list = document.getElementById("project-list");
  if (!list) {
    return;
  }

  projects.forEach((project) => {
    list.appendChild(createProjectCard(project));
  });
}

function renderGarden() {
  const bed = document.getElementById("garden-bed");
  if (!bed) {
    return;
  }

  gardenBlooms.forEach((bloom, index) => {
    const flower = document.createElement("pre");
    flower.className = `garden-sprout ${bloom.className}`;
    flower.dataset.x = `${bloom.x}`;
    flower.dataset.y = `${bloom.y}`;
    flower.dataset.stage = "0";
    const stageArt = bloom.stages ?? [bloom.art];
    flower.dataset.maxStage = `${stageArt.length - 1}`;
    flower.textContent = stageArt[0].join("\n");
    flower.style.left = `${bloom.x}%`;
    flower.style.top = `${bloom.y}%`;
    flower.style.animationDelay = `${(index % 6) * 220}ms`;
    bed.appendChild(flower);
    grownSprouts.push(flower);
    setSproutStage(flower, bloom.stage ?? 0);
  });
}

function setSproutStage(sprout, stage) {
  const bloom = gardenBlooms[grownSprouts.indexOf(sprout)];
  if (!bloom) {
    return;
  }

  const stageArt = bloom.stages ?? [bloom.art];
  const maxStage = stageArt.length - 1;
  const nextStage = Math.max(0, Math.min(stage, maxStage));
  sprout.dataset.stage = `${nextStage}`;
  sprout.textContent = stageArt[nextStage].join("\n");
  sprout.classList.toggle("is-grown", nextStage === maxStage);
}

function growNearbySprouts(originX, originY) {
  grownSprouts.forEach((sprout) => {
    const sproutX = Number(sprout.dataset.x);
    const sproutY = Number(sprout.dataset.y);
    const distance = Math.hypot(sproutX - originX, sproutY - originY);

    if (distance > 18) {
      return;
    }

    const currentStage = Number(sprout.dataset.stage);
    const growthBoost = distance < 8 ? 1 : 1;
    setSproutStage(sprout, currentStage + growthBoost);
  });
}

function createWaterRipple(container, x, y) {
  const ripple = document.createElement("span");
  ripple.className = "garden-ripple";
  ripple.style.left = `${x}%`;
  ripple.style.top = `${y}%`;
  container.appendChild(ripple);

  window.setTimeout(() => {
    ripple.remove();
  }, 900);
}

function setupGardenInteraction() {
  const field = document.querySelector(".garden-field");
  if (!field) {
    return;
  }

  field.addEventListener("click", (event) => {
    const rect = field.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    createWaterRipple(field, x, y);
    growNearbySprouts(x, y);
  });
}

function setupActiveNav() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll("[data-nav-link]")];

  if (!sections.length || !navLinks.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const target = link.getAttribute("href")?.slice(1);
          link.classList.toggle("active", target === entry.target.id);
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0.01,
    },
  );

  sections.forEach((section) => observer.observe(section));
}

function setupRevealAnimations() {
  const revealItems = [...document.querySelectorAll(".reveal")];
  if (!revealItems.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupCustomCursor() {
  const cursor = document.querySelector(".custom-cursor");
  if (!cursor || window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  const hoverTargets = document.querySelectorAll(
    "a, button, .project-card, .note",
  );

  window.addEventListener("mousemove", (event) => {
    cursor.classList.add("is-visible");
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  hoverTargets.forEach((target) => {
    target.addEventListener("mouseenter", () => {
      cursor.classList.add("is-hovering");
    });

    target.addEventListener("mouseleave", () => {
      cursor.classList.remove("is-hovering");
    });
  });

  document.addEventListener("mouseleave", () => {
    cursor.classList.remove("is-visible");
  });
}

function setupNoteTilt() {
  const notes = document.querySelectorAll(".note");
  if (
    !notes.length ||
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  notes.forEach((note) => {
    note.addEventListener("mousemove", (event) => {
      const rect = note.getBoundingClientRect();
      const ratioX = (event.clientX - rect.left) / rect.width - 0.5;
      const ratioY = (event.clientY - rect.top) / rect.height - 0.5;
      const tiltY = ratioX * 11;
      const tiltX = -ratioY * 9;
      const shiftX = ratioX * 8;
      const shiftY = ratioY * 8;

      note.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
      note.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
      note.style.setProperty("--shift-x", `${shiftX.toFixed(2)}px`);
      note.style.setProperty("--shift-y", `${shiftY.toFixed(2)}px`);
      note.classList.add("is-tilting");
    });

    note.addEventListener("mouseleave", () => {
      note.style.setProperty("--tilt-x", "0deg");
      note.style.setProperty("--tilt-y", "0deg");
      note.style.setProperty("--shift-x", "0px");
      note.style.setProperty("--shift-y", "0px");
      note.classList.remove("is-tilting");
    });
  });
}

function setupProjectCardTilt() {
  const cards = document.querySelectorAll(".project-card");
  if (
    !cards.length ||
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const ratioX = (event.clientX - rect.left) / rect.width - 0.5;
      const ratioY = (event.clientY - rect.top) / rect.height - 0.5;
      const tiltY = ratioX * 4;
      const tiltX = -ratioY * 3.5;
      const shiftX = ratioX * 2.5;
      const shiftY = ratioY * 2.5;

      card.style.setProperty("--card-tilt-x", `${tiltX.toFixed(2)}deg`);
      card.style.setProperty("--card-tilt-y", `${tiltY.toFixed(2)}deg`);
      card.style.setProperty("--card-shift-x", `${shiftX.toFixed(2)}px`);
      card.style.setProperty("--card-shift-y", `${shiftY.toFixed(2)}px`);
      card.classList.add("is-tilting");
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--card-tilt-x", "0deg");
      card.style.setProperty("--card-tilt-y", "0deg");
      card.style.setProperty("--card-shift-x", "0px");
      card.style.setProperty("--card-shift-y", "0px");
      card.classList.remove("is-tilting");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupStarfield();
  renderProjects();
  renderGarden();
  setupGardenInteraction();
  setupActiveNav();
  setupRevealAnimations();
  setupCustomCursor();
  setupNoteTilt();
  setupProjectCardTilt();
});
