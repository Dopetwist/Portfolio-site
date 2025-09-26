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
        />
    )
}

function Project() {
    return (
        <section id="project"> 
            <h2 className="heading" id="portfolio"><Icons.CodeXml id="code-icon" />  Portfolio Projects </h2>

            <p className="explore"> Explore my previous projects built with various technologies! </p>

            <div className="project-container">
                {projects.map(displayCard)}
            </div>

            <div className="more-projects">
                <a href="https://github.com/Dopetwist" id="view"> 
                    <p> View more on GitHub <Icons.ArrowRight /> </p> 
                </a>
            </div>
        </section>
    )
}

export default Project;