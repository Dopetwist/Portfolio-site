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
        </nav>
    )
}

export default Nav;