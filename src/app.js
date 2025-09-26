

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("header");
    const nav = document.querySelector(".nav-links");

    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    nav.classList.remove("toggle");
    nav.classList.remove("show");
});


