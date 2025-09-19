import ThemeMode from "./ThemeMode";

function Nav() {

    function handleClick() {
        const menu = document.getElementById("menu-icon");
        const nav = document.querySelector(".nav-links");

        menu.classList.toggle("bx-x");
        nav.classList.toggle("toggle");
        nav.classList.toggle("show");
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