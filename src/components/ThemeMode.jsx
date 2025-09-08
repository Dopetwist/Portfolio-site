import { useEffect, useState } from "react";

function ThemeMode() {
    const [ lightTheme, setLightTheme ] = useState(false);

    useEffect(() => {
        const toggleButton = document.getElementById("toggle-icon");

        if (lightTheme) {
            toggleButton.classList.remove("bx-sun-bright");
            toggleButton.classList.add("bx-moon");
            document.body.classList.add("light-mode");
        } else {
            toggleButton.classList.remove("bx-moon");
            toggleButton.classList.add("bx-sun-bright");
            document.body.classList.remove("light-mode");
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