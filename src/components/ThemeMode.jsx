import { useEffect, useState } from "react";

function ThemeMode() {
    const [ lightTheme, setLightTheme ] = useState(false);

    useEffect(() => {
        const toggleButton = document.getElementById("toggle-icon");
        const skillBG = document.getElementById("skill");

        if (lightTheme) {
            toggleButton.classList.remove("bx-sun-bright");
            toggleButton.classList.add("bx-moon");
            document.body.classList.add("light-mode");
            skillBG.style.background = "linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url('/images/background-1.png')";
            skillBG.style.backgroundPosition = "center";
            skillBG.style.backgroundSize = "cover";
        } else {
            toggleButton.classList.remove("bx-moon");
            toggleButton.classList.add("bx-sun-bright");
            document.body.classList.remove("light-mode");
            skillBG.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/background-1.png')";
            skillBG.style.backgroundPosition = "center";
            skillBG.style.backgroundSize = "cover";
        }

    }, [lightTheme]);



    return (
        <div>
            <div className="mode-con"
            onClick={() => setLightTheme(!lightTheme)}
            >
                { lightTheme ? <i className='bxr  bx-sun-bright'  id="toggle-icon"></i>
                    :  <i className='bxr  bx-moon'  id="toggle-icon"></i> }
            </div>
        </div>
    )
}

export default ThemeMode;