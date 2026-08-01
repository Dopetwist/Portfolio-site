import Icons from "./Icons";

function About() {
    return (
        <section id="about">
            <div className="page-pill">
                <span>About</span>
            </div>
            <h2 className="heading">Who am i ?</h2>

            <div className="about-content">
                <div className="about-sub">
                    <div className="about-text">
                        <p>
                            I'm a B.Eng degree holder who ventured into Tech out of curiosity and a keen eye for futuristic innovations. <br /><br />
                            I utilize modern Frontend and Backend Technologies which includes React.js, Node.js, PostgreSQL and more in building optimized and seamless web experiences. <br /><br />
                            With over 3 years of hands-on experience and a solid foundation in web development, I’ve built various dynamic web applications 
                            and i focus on blending high-quality with creativity to deliver web solutions that don't just work but scale. <br />
                        </p>
                    </div>

                    <div className="about-btns">
                        <a href="/JonathanA-resume.pdf" target="_blank">
                            <button><Icons.Download id="download-icon"/>  Download CV </button>
                        </a>

                        <a href="https://drive.google.com/file/d/1Tw7kwfaQ0VRoj1ria4pPSMcuuMfdhzyI/view?usp=drive_link" target="_blank">
                            <button><Icons.ExternalLink id="link-icon"/>  DEV Cert </button>
                        </a>
                    </div>
                </div>

                <figure id="about-img">
                    <img src="/images/Profile-pic.JPG" alt="Profile Picture" loading="lazy"/>
                </figure>
            </div>
        </section>
    )
}

export default About;