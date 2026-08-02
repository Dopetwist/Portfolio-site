import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import ThemeMode from "./ThemeMode";
import Icons from "./Icons";

function Nav({ lightTheme, setLightTheme }) {

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
            <div className="nav-links" id="navlink-box">
                {isOpen && (
                    <a href="#home" className="name">
                        <figure>
                            <img src={lightTheme ? "/JA-Logo2.png" : "/JA-Logo.png"} alt="Jonathan's Logo" />
                        </figure>
                        <h2> Jonathan Afugwobi </h2>
                    </a>
                )}

                <HashLink smooth to="/#home" className="home-nav"> Home </HashLink>
                <HashLink smooth to="/#about"> About </HashLink>
                <HashLink smooth to="/#project"> Projects </HashLink>
                <HashLink smooth to="/#skill"> Skills </HashLink>
                <HashLink smooth to="/#contact"> Contact </HashLink>

                {isOpen && (
                    <HashLink smooth to="/#contact" id="hire-link">
                        <button type="button" id="hire-btn">
                            Hire Me
                        </button>
                    </HashLink>
                )}
            </div>

            <ThemeMode
                lightTheme={lightTheme} 
                setLightTheme={setLightTheme}
            />
            
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