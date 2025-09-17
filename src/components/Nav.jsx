import ThemeMode from "./ThemeMode";

function Nav() {
    return (
        <nav className="navbar">
            <a href="#home" className="home-nav">Home</a>
            <a href="#about">About</a>
            <a href="#project">Projects</a>
            <a href="#skill">Skills</a>
            <a href="#contact">Contact</a>

            <ThemeMode />
            <i class='bxr  bx-menu' id="menu-icon"></i>
        </nav>
    )
}

export default Nav;