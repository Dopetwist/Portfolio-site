// components/Slider.jsx

import "../../src/slider.css";

const techStack = [
    "/images/slider/Git-Logo-Vector.jpg",
    "/images/tech/react.png",
    "/images/slider/vercel.jpg",
    "/images/slider/node.png",
    "/images/svgs/postman.svg",
    "/images/svgs/vs-code.svg",
    "/images/svgs/github-icon.svg",
    "/images/tech/postgresql.png"
];

function Slider() {
    return (
        <div id="slider-main" className="slider-section">
            <h1 className="slider-title">I work with Modern Technologies and Platforms</h1>

            <div className="slider">
                <div className="slide-track">
                    {/* Original set */}
                    {techStack.map((logo, index) => (
                        <div className="tech-slide" key={`original-${index}`}>
                            <img src={logo} alt="tech logo" />
                        </div>
                    ))}

                    {/* Duplicate set (important for seamless loop) */}
                    {techStack.map((logo, index) => (
                        <div className="tech-slide" key={`duplicate-${index}`}>
                            <img src={logo} alt="tech logo" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider;