

function Home() {
    return (
        <section id="home">
            <main>
                <div className="home-div">
                    <h3> Hello! I'm </h3>
                    <h2> Jonathan Afugwobi </h2>
                    <p id="dev">And i'm a <span>Full Stack Developer</span></p> 

                    <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Autem temporibus quam, corporis sint provident similique esse aperiam 
                        eius adipisci aspernatur veritatis saepe. Quidem recusandae amet quod 
                        enim rem ea quam iusto laudantium totam tempora nisi fugiat
                    </p>

                    <div className="home-buttons">
                        <a href="#project">
                            <button id="my-work"> View My Work </button>
                        </a>
                        <a href="#contact">
                            <button id="touch"> Get In Touch </button>
                        </a>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Home;