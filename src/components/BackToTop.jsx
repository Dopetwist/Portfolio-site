import { useEffect, useState } from "react";

function BackToTop() {
    const [ showButton, setShowButton ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 900) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (

        <div>
            { showButton && (
                <button 
                onClick={scrollTop}
                id="back-to-top"
                >
                    <i class='bxr  bx-arrow-up-stroke'  ></i>
                </button>
            )}
        </div>
    )
}

export default BackToTop;