import ThemeMode from "./ThemeMode";
import Icons from "./Icons";
import { useState } from "react";

function Nav() {

    // const [ menuClicked, setClicked ] = useState(false);

    function handleClick() {
        const menu = document.getElementById("menu-icon");
        const nav = document.querySelector(".nav-links");

        // setClicked(true);
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
            
            <div
            id="menu-icon"
            onClick={handleClick}
            >
                <Icons.TextAlignJustify />
            </div>
        </nav>
    )
}

export default Nav;