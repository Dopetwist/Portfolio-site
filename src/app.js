

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("header");
    const menu = document.getElementById("menu-icon");
    const nav = document.querySelector(".nav-links");

    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    menu.classList.remove("bx-x");
    nav.classList.remove("toggle");
    nav.classList.remove("show");
});


