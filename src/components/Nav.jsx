import ThemeMode from "./ThemeMode";
import Icons from "./Icons";
import { useEffect, useState } from "react";

function Nav() {

    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        const nav = document.querySelector(".nav-links");

        if (isOpen) {
            nav.classList.add("toggle");
            nav.classList.add("show");
        } else {
            nav.classList.remove("toggle");
            nav.classList.remove("show");
        }
    }, [isOpen]);

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
            onClick={() => setIsOpen(!isOpen)}
            >
                { isOpen ? 
                    <Icons.X className="inner-icon"/> 
                    : <Icons.TextAlignJustify className="inner-icon" /> 
                }

            </div>

        </nav>
    )
}

export default Nav;