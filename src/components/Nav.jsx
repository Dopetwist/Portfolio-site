import ThemeMode from "./ThemeMode";

function Nav() {

    function handleClick() {
        const menu = document.getElementById("menu-icon");
        const nav = document.querySelector(".nav-links");

        if (menu.classList.contains("bx-menu")) {
            menu.classList.remove("bx-menu");
            menu.classList.add("bx-x");
            nav.classList.add("toggle");
        } else {
            menu.classList.remove("bx-x");
            menu.classList.add("bx-menu");
            nav.classList.remove("toggle");
        }
    }

    return (
        <nav className="navbar">
            <div className="nav-links">
                <a href="#home" className="home-nav">Home</a>
                <a href="#about">About</a>
                <a href="#project">Projects</a>
                <a href="#skill">Skills</a>
                <a href="#contact">Contact</a>
            </div>

            <ThemeMode />
            <i class='bxr  bx-menu' id="menu-icon"
            onClick={handleClick}></i>
        </nav>
    )
}

export default Nav;