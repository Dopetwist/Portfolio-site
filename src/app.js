

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("header");

    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// // Back to Top

// const button = document.getElementById("back-to-top");

// window.onscroll = function() { scrollFunction() };

// button.addEventListener("click", () => {
//     topFunction();
// });

// // Function to detect scroll level

// function scrollFunction() {
//     if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
//         button.style.display = "block";
//     } else {
//         button.style.display = "none";
//     }
// }

// // Function to scroll to top

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }


