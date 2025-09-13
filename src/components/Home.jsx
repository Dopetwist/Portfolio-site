import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Full Stack Developer', 'Graphic Designer'],
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 1000,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <section id="home">
            <main>
                <div className="home-div">
                    <h3> Hello! I'm </h3>
                    <h2 id='main-name'> Jonathan Afugwobi </h2>
                    <p id="dev">And i'm a <span ref={el}/> </p> 

                    <div className="tagline">
                        <p className="home-text"> Building Innovative Solutions and digital experiences with performance and precision. </p>
                    </div>

                    <div className="home-buttons">
                        <a href="#project">
                            <button id="my-work"> View My Work </button>
                        </a>
                        <a href="#contact">
                            <button id="touch"> Get In Touch </button>
                        </a>
                    </div>

                    <a href="#about" id='arrow-con'>
                        <i class='bxr  bx-chevrons-down'  id='arrow-down'></i>
                    </a> 
                </div>
            </main>
        </section>
    )
}

export default Home;