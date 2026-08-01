import { useLayoutEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";
import BackToTop from "./BackToTop";
import ScrollWrapper from "./ScrollReveal.jsx";
import Slider from "./Slider.jsx";
import '../app.js';


function App() {

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
    <>
      <ScrollWrapper />
      <BackToTop />
      <Header 
        lightTheme={lightTheme} 
        setLightTheme={setLightTheme} 
      />
      <Home />
      <Slider />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer 
        lightTheme={lightTheme} 
        setLightTheme={setLightTheme}
      />
    </>
  )
}

export default App;
