const projects = [
  {
    type: "concept",
    date: "Fall 2025",
    title: "Open AI / Hardware",
    description:
      "Exploring what it means to bring AI beyond an app and into physical companions that listen, assist, and adapt.",
    link: "#",
    thumbClass: "thumb-orange",
  },
  {
    type: "Perplexity",
    date: "Spring 2026",
    title: "Perplexity Health",
    description:
      "Visualizing and understanding health data in an AI-native platform.",
    link: "#",
    thumbClass: "thumb-teal",
  },
  {
    type: "Perplexity",
    date: "Spring 2026",
    title: "Comet Voice Mode",
    description:
      "Bringing AI voice navigation and assistance into the Comet desktop browser.",
    link: "#",
    thumbClass: "thumb-lilac",
  },
  {
    type: "Competition",
    date: "Oct 2025",
    title: "Live Comments On Figma",
    description:
      "Crafting on-the-go creative moments for Figma on mobile.",
    link: "#",
    thumbClass: "thumb-violet",
  },
];

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
      const tiltY = ratioX * 6;
      const tiltX = -ratioY * 5;
      const shiftX = ratioX * 3.5;
      const shiftY = ratioY * 3.5;

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
  renderProjects();
  setupActiveNav();
  setupRevealAnimations();
  setupCustomCursor();
  setupNoteTilt();
  setupProjectCardTilt();
});
