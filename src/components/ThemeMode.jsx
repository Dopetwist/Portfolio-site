import { useLayoutEffect, useState } from "react";
import Icons from "./Icons";

function ThemeMode() {
    const [ lightTheme, setLightTheme ] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "light";
    });

    useLayoutEffect(() => {
        const toggleButton = document.getElementById("toggle-icon");
        const skillBG = document.getElementById("skill");
        const text = document.querySelector(".about-text p");

        if (lightTheme) {
            toggleButton.classList.remove("bx-sun-bright");
            toggleButton.classList.add("bx-moon");
            document.documentElement.classList.add("light-mode");
            skillBG.style.background = "linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url('/images/background-1.png')";
            skillBG.style.backgroundPosition = "center";
            skillBG.style.backgroundSize = "cover";
            text.style.color = "#000";
            localStorage.setItem("theme", "light");
        } else {
            toggleButton.classList.remove("bx-moon");
            toggleButton.classList.add("bx-sun-bright");
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
            onClick={() => setLightTheme(!lightTheme)}
            >
                { lightTheme ? <Icons.Sun id="toggle-icon" />
                    :  <Icons.Moon id="toggle-icon"/> }
            </div>
        </div>
    )
}

export default ThemeMode;