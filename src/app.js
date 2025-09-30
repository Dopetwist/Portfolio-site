

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("header");
    const nav = document.querySelector(".nav-links");

    if (window.scrollY > 0) {
        // Display bottom box shadow on scroll
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Remove side bar on scroll
    nav.classList.remove("toggle");
    nav.classList.remove("show");
});


