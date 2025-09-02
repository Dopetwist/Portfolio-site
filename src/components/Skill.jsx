import { frontend, backend } from "../index";

function Skill() {
    return (
        <section id="skill">
            <h2 className="heading"> Tech Skills </h2>

            <div className="skill-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Similique magnam id laudantium? Consequatur voluptatum quam quis 
                    soluta rerum pariatur praesentium. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Similique magnam id laudantium? Consequatur voluptatum quam quis 
                    soluta rerum pariatur praesentium.
                </p>
            </div>
            
            <div className="frontend">
                <h3>Frontend</h3>

                <div className="frontend-tech">
                    {frontend.map((item) => (
                        <div className="sk">
                            <img src={item.img} alt="tech logo" key={item.id} />
                        </div>
                    ))}
                </div>
                
            </div>

            <div className="backend">
                <h3>Backend</h3>

                <div className="backend-tech">
                    {backend.map((item) => (
                        <div className="sk">
                            <img src={item.img} alt="tech logo" key={item.id} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="tools">

            </div>
        </section>
    )
}

export default Skill;