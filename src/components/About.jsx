

function About() {
    return (
        <section id="about">
            <h2 className="heading">About Me</h2>

            <div className="about-content">
                <div className="about-sub">
                    <div className="about-text">
                        <p>
                            I'm a B.Eng degree holder who ventured into Tech out of curiosity and a keen eye for futuristic innovations. <br /><br />
                            I utilize modern Frontend and Backend Technologies which includes React.js, Node.js, PostgreSQL and more in building optimized and seamless web experiences. <br /><br />
                            With over 2 years of hands-on experience and a solid foundation in web development, I’ve built various dynamic web applications 
                            and i focus on blending high-quality with creativity to deliver web solutions that don't just work but scale. <br />
                        </p>
                    </div>

                    <button><i class='bxr  bx-arrow-in-down-square-half'></i>  Download CV </button>
                </div>

                <figure id="about-img">
                    <img src="/images/Profile-pic.JPG" alt="Profile Picture" loading="lazy"/>
                </figure>
            </div>
        </section>
    )
}

export default About;