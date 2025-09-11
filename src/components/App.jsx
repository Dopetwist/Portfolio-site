import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";
import BackToTop from "./BackToTop";
import ScrollWrapper from "./ScrollReveal.jsx";
import '../app.js';


function App() {

  return (
    <>
      <ScrollWrapper />
      <BackToTop />
      <Header />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
