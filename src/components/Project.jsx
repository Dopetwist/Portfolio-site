import Card from "./Card";
import { projects } from "../index"

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
            <h2 className="heading"> Portfolio Projects </h2>

            <div className="project-container">
                {projects.map(displayCard)}
            </div>

            <div className="more-projects">
                <a href="https://github.com/Dopetwist" id="view"> 
                    <p> View more on GitHub <i className='bx  bx-arrow-right-stroke'></i> </p> 
                </a>
            </div>
        </section>
    )
}

export default Project;