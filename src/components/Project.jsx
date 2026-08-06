import Card from "./Card";
import { projects } from "../index";
import Icons from "./Icons";

function displayCard(item) {
    return (
        <Card
            key={item.id}
            title={item.title}
            descrp={item.description}
            image={item.img}
            link={item.github}
            tech={item.tech}
            live={item.live}
        />
    )
}

function Project() {
    return (
        <section id="project"> 
            <div className="page-pill">
                <span>My Work</span>
            </div>
            
            <h2 className="heading" id="portfolio"><Icons.CodeXml size={40} id="code-icon" />  Featured Projects </h2>

            <p className="explore"> Explore my previous projects built with modern technologies! </p>

            <div className="project-container">
                <div className="project-box">
                    {projects.map(displayCard)}
                </div>
            </div>

            <div className="more-projects">
                <a href="https://github.com/Dopetwist" id="view" target="blank"> 
                    <p> View more on GitHub <Icons.ArrowRight id="arrow-right"/> </p> 
                </a>
            </div>
        </section>
    )
}

export default Project;