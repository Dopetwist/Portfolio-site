import { useEffect, useState } from "react";
import Icons from "./Icons";

function BackToTop() {
    const [ showButton, setShowButton ] = useState(false);

    useEffect(() => {
        // Display back-to-top button on scroll
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

    // Reset scroll to default
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
                    <Icons.ArrowUp size={22} id="B2T" />
                </button>
            )}
        </div>
    )
}

export default BackToTop;