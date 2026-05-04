async function fetch_theme() {
    const response = await fetch("../../assets/ui.json");
    return await response.json();
}

function get_saved_theme(data) {
    return localStorage.getItem("theme-mode") || data.main["default-mode"];
}

function save_theme(mode) {
    localStorage.setItem("theme-mode", mode);
}

function apply_theme(theme) {
    const body = document.body;
    const header = document.querySelector("header");
    const cards = document.querySelectorAll(".card");
    const price = document.querySelector(".price");
    const buttons = document.querySelectorAll(".btn");
    const footer = document.querySelector("footer");

    body.style.background = theme["background-color"];
    body.style.color = theme["text-color"];

    body.style.background = theme["body-background"];
    body.style.color = theme["body-foreground"];
    
    if (header) {
        header.style.background = theme.header["background-color"];
        header.style.color = theme.header["foreground-color"];
    }

    cards.forEach(card => {
        card.style.background = theme["card-background"];
        card.style.color = theme["card-foreground"];
    });

    if (price) {
        price.style.color = theme["price-foreground"];
    }

    buttons.forEach(btn => {
        btn.style.background = theme["btn-background"];
        btn.style.color = theme["btn-foreground"];
    });

    if (footer) {
        footer.style.color = theme["footer-foreground"];
    }
}

function toggleTheme() {
    const current = localStorage.getItem("theme-mode") || "light-theme";
    const next = current === "dark-theme" ? "light-theme" : "dark-theme";

    setTheme(next);

    const btn = document.getElementById("theme-toggle");
    btn.innerText = next === "dark-theme" ? "☀️" : "🌙";
}

async function main_theme() {
    const data = await fetch_theme();

    const mode = get_saved_theme(data);
    apply_theme(data[mode]);

    window.setTheme = function(newMode) {
        apply_theme(data[newMode]);
        save_theme(newMode);
    };

    const btn = document.getElementById("theme-toggle");
    if (btn) {
        btn.innerText = mode === "dark-theme" ? "☀️" : "🌙";
    }
}

document.addEventListener("DOMContentLoaded", main_theme);
