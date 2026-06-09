import Slideshow from "./slideshow.js";

class Renderer {
  constructor(styles, templates, updater) {
    this.styles = styles;
    this.templates = templates;
    this.updater = updater;

    this.currentView = localStorage.getItem("currentView") || "home";

    this.isRendering = false;

    this.theme = localStorage.getItem("theme") || styles.default;

    this.activeViewControllers = [];
  }

  init() {
    this.applyTheme();

    document.addEventListener("DOMContentLoaded", () => {
      this.renderView();
    });

    document.addEventListener("click", (e) => {
      const link = e.target.closest("[data-page]");
      if (!link) return;

      e.preventDefault();

      this.currentView = link.dataset.page.trim().toLowerCase();
      localStorage.setItem("currentView", this.currentView);

      this.renderView();
    });

    // THEME TOGGLE
    document.addEventListener("click", (e) => {
      const icon = e.target.closest("#theme-toggle");
      if (!icon) return;

      e.preventDefault();
      this.toggleTheme();
    });

    this.renderView();
  }

  renderView() {
    const view = (this.currentView || "home").toLowerCase();

    const template = this.templates[view];

    if (!template) {
      console.warn(`No template found for view: ${view}`);
      this.currentView = "home";
      localStorage.setItem("currentView", this.currentView);
      return this.renderView();
    }

    this.cleanupView();

    this.render(template);

    requestAnimationFrame(() => {
      if (view === "services") this.hydrateServices();
    });

    document.title =
      `${view.charAt(0).toUpperCase() + view.slice(1)} | ${this.updater.getBusinessName()}`;
  }

  cleanupView() {
    this.activeViewControllers.forEach(ctrl => {
      if (ctrl && typeof ctrl.destroy === "function") {
        ctrl.destroy();
      }
    });

    this.activeViewControllers = [];
  }

  applyTheme() {
    const themeConfig = this.styles[this.theme];
    const styles = themeConfig.styles;

    for (const key in styles) {
      document.documentElement.style.setProperty(key, styles[key]);
    }

    const main = document.querySelector(".main");
    if (main) {
      main.style.color = this.theme === "dark_theme" ? "#ffffff" : "#1a1a1a";
    }

    const icon = document.getElementById("theme-toggle");
    if (icon) {
      const meta = themeConfig.meta || {};
      icon.src =
          meta.icon ||
          (this.theme === "dark_theme"
            ? "./assets/icons/sun.png"
            : "./assets/icons/moon.png");

      icon.alt = meta.label
        ? `Switch to ${meta.label}`
        : this.theme === "dark_theme"
          ? "Switch to light mode"
          : "Switch to dark mode";
    }
  }

  render(template) {
    if (this.isRendering) return;
    this.isRendering = true;

    const main = document.querySelector(".main");
    if (!main) {
      this.isRendering = false;
      return;
    }

    const result = template();

    main.innerHTML = result.html;

    if (result.styles) {
      this.injectStyles(result.styles);
    }

    this.hydrateGlobals(result);

    requestAnimationFrame(() => {
      this.isRendering = false;
    });
  }

  injectStyles(styleObj) {
    if (!styleObj) return;

    let css = "";

    if (styleObj.base) {
      css += this.buildCSS(styleObj.base);
    }

    if (styleObj.mobile) {
      css += `
@media (max-width: 700px) {
${this.buildCSS(styleObj.mobile)}
}
`;
    }

    let styleTag = document.getElementById("template-styles");

    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "template-styles";
      document.head.appendChild(styleTag);
    }

    styleTag.textContent = css;
  }

  buildCSS(styleObj) {
    let css = "";

    for (const selector in styleObj) {
      css += `${selector} {`;

      for (const prop in styleObj[selector]) {
        const value = styleObj[selector][prop];

        const cssProp = prop.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);

        css += `${cssProp}: ${value};`;
      }

      css += `}`;
    }

    return css;
  }

  hydrateGlobals(result) {
    document.querySelectorAll(".business_name").forEach(el => {
      el.textContent = this.updater.getBusinessName();
    });

    document.querySelectorAll(".tagline").forEach(el => {
      el.textContent = this.updater.getTagline();
    });

    document.querySelectorAll(".callnumlink").forEach(el => {
      const phone = this.updater.getPhoneNumber();

      el.textContent = phone;

      if (el.tagName.toLowerCase() === "a") {
        el.href = `tel:${phone}`;
      }
    });

    document.title = this.updater.getDocumentTitle(result.title);
  }

  hydrateServices() {
    const data = this.updater.getServices();
    if (!data) return;

    const intro = document.querySelector(".services-intro");
    if (intro) {
      intro.textContent = data.intro;
    }

    const container = document.querySelector(".services-grid");
    if (!container) return;

    container.innerHTML = "";

    data.items.forEach(item => {
      const card = document.createElement("div");
      card.className = "service-card";

      card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;

      container.appendChild(card);
    });

    const title = document.querySelector(".note-title");
    if (title) {
      title.textContent = data.noteTitle;
    }

    const body = document.querySelector(".note-body");
    if (body) {
      body.innerHTML = data.note.map(p => `<p>${p}</p>`).join("");
    }

    
    const slideshow = new Slideshow("assets/images/jobs/index.json");
    slideshow.init();

    this.activeViewControllers.push(slideshow);
  }

  toggleTheme() {
    const themes = Object.keys(this.styles);

    let currentIndex = themes.indexOf(this.theme);
    if (currentIndex === -1) currentIndex = 0;

    let nextIndex = (currentIndex + 1) % themes.length;

    while (themes[nextIndex] === "default") {
      nextIndex = (nextIndex + 1) % themes.length;
    }

    this.theme = themes[nextIndex];

    localStorage.setItem("theme", this.theme);

    this.applyTheme();
  }
}

export default Renderer;
