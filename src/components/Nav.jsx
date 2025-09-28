import ThemeMode from "./ThemeMode";
import Icons from "./Icons";
import { useEffect, useState } from "react";

function Nav() {

    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        const nav = document.querySelector(".nav-links");
        const navBar = document.querySelector(".navbar");

        const handleMousedown = (event) => {

            // Close sidebar on outside click
            if (!navBar.contains(event.target) && !nav.contains(event.target)) {
                nav.classList.remove("show");
                setIsOpen(false);
            }

        }

        const removeX = () => {
            setIsOpen(false)
        }

        window.addEventListener("scroll", removeX);

        if (isOpen) {
            nav.classList.add("toggle");
            nav.classList.add("show");
        } else {
            nav.classList.remove("toggle");
            nav.classList.remove("show");
        }

        window.addEventListener("mousedown", handleMousedown);

        // Cleanup 
        return () => { 
            window.removeEventListener("mousedown", handleMousedown)
            window.removeEventListener("scroll", removeX);
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