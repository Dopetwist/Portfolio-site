import { useState } from "react";

function ThemeMode() {
    const [ darkTheme, setDarkTheme ] = useState(true);
   

    function handleClick() {
        const toggleButton = document.getElementById("toggle-icon");

        if (toggleButton.classList.contains("bx-sun-bright")) {
            setDarkTheme(false);
        } else {
            setDarkTheme(true);
        }
    }

    return (
        <div>
            { darkTheme ? 
            <div className="mode-con"
            onClick={handleClick}
            >
                <i className='bxr  bx-sun-bright'  id="toggle-icon"></i>
            </div> : 
            <div className="mode-con"
            onClick={handleClick}
            >
                <i className='bxr  bx-moon' id="toggle-icon"></i> 
            </div> }
        </div>
    )
}

export default ThemeMode;