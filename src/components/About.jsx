

function About() {
    return (
        <section id="about">
            <h2 className="heading">About Me</h2>

            <div className="about-content">
                <div className="about-sub">
                    <div className="about-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Autem temporibus quam, corporis sint provident similique esse aperiam 
                        eius adipisci aspernatur veritatis saepe. Quidem recusandae amet quod 
                        enim rem ea quam iusto laudantium totam tempora nisi fugiat, officia 
                        laborum eligendi sapiente perspiciatis debitis a nemo necessitatibus 
                        dolorem!
                    </div>

                    <button><i class='bxr  bx-arrow-in-down-square-half'></i>  Download CV </button>
                </div>

                <figure>
                    <img src="/images/Profile-pic.JPG" alt="Profile Picture" loading="lazy"/>
                </figure>
            </div>
        </section>
    )
}

export default About;