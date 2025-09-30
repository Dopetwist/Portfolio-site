import { useLayoutEffect, useState } from "react";
import Icons from "./Icons";

function ThemeMode() {
    // Store theme to localStorage
    const [ lightTheme, setLightTheme ] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "light";
    });

    useLayoutEffect(() => {
        const skillBG = document.getElementById("skill");
        const text = document.querySelector(".about-text p");

        if (lightTheme) {
            document.documentElement.classList.add("light-mode");
            skillBG.style.background = "linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url('/images/background-1.png')";
            skillBG.style.backgroundPosition = "center";
            skillBG.style.backgroundSize = "cover";
            text.style.color = "#000";
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.remove("light-mode");
            skillBG.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/background-1.png')";
            skillBG.style.backgroundPosition = "center";
            skillBG.style.backgroundSize = "cover";
            text.style.color = "#fff";
            localStorage.setItem("theme", "dark");
        }

    }, [lightTheme]);



    return (
        <div>
            <div className="mode-con"
            onClick={() => setLightTheme(!lightTheme)} // Toggle theme
            >
                { lightTheme ? <Icons.Moon id="toggle-icon"/>
                    : <Icons.Sun id="toggle-icon" /> }
            </div>
        </div>
    )
}

export default ThemeMode;