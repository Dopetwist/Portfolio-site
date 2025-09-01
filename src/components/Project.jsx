import Card from "./Card";
import projects from "../index"

function displayCard(item) {
    return (
        <Card 
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
            <h2 className="heading"> My Projects </h2>

            {projects.map(displayCard)}
        </section>
    )
}

export default Project;