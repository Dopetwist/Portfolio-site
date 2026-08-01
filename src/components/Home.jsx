import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Icons from './Icons';

function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Full Stack Engineer', 'Graphic Designer'],
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
                    <h2 id='main-name'> Jonathan Afugwobi </h2>
                    <p id="dev"> <span ref={el} /> </p> 

                    <div className="tagline">
                        <p className="home-text"> Building Innovative Solutions and digital experiences with performance and precision. </p>
                    </div>

                    <div className="stats">
                        <div className='stats-box'>
                            <span>3 Years +</span>
                            <p>Experience</p>
                        </div>

                        <div className='stats-box'>
                            <span>10+</span>
                            <p>Trusted Clients</p>
                        </div>

                        <div className='stats-box'>
                            <span>20+</span>
                            <p>Built Projects</p>
                        </div>
                    </div>

                    <div className="home-buttons">
                        <a href="#project">
                            <button id="my-work"> View My Work </button>
                        </a>
                        <a href="#contact">
                            <button id="touch"> Get In Touch </button>
                        </a>
                    </div>

                    <a href="#slider-main" id='arrow-con'>
                        <Icons.ChevronsDown size={30} id='arrow-down' />
                    </a> 
                </div>
            </main>
        </section>
    )
}

export default Home;