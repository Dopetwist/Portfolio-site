import { frontend, backend, tools } from "../index";

function Skill() {
    return (
        <section id="skill">
            <h2 className="heading"> My Tech <span id="skill-span">Skills</span> & Tools </h2>

            <div className="skill-text">
                <p> With extensive knowledge in modern technologies, i transform ideas into functional and interactive applications focused on users satisfaction. </p>
            </div>

            
            <div className="main-con">
                <div className="sub-con">
                    <div className="frontend">
                        <h3>Frontend</h3>

                        <div className="frontend-tech">
                            {frontend.map((item) => (
                                <div className="sk"  key={item.id}>
                                    <img src={item.img} alt={item.name + " logo"} loading="lazy" />
                                    <div className="skill-name"> 
                                        <div className="tech-name-con">
                                            <p className="tech-name"> {item.name} </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>

                    <div className="backend">
                        <h3>Backend</h3>

                        <div className="backend-tech">
                            {backend.map((item) => (
                                <div className="sk" key={item.id}>
                                    <img src={item.img} alt={item.name + " logo"} loading="lazy" />
                                    <div className="skill-name"> 
                                        <div className="tech-name-con">
                                            <p className="tech-name"> {item.name} </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tools">
                        <h3>Tools</h3>

                        <div className="tools-tech">
                            {tools.map((item) => (
                                <div className="sk" key={item.id}>
                                    <img src={item.img} alt={item.name + " logo"} loading="lazy" />
                                    <div className="skill-name"> 
                                        <div className="tech-name-con">
                                            <p className="tech-name"> {item.name} </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="soft-skills">
                    <h3>Soft Skills</h3>
                    <p>
                        Aside technical skills, i possess soft skills which includes;
                    </p>

                    <br />

                    <ul>
                        <li>Good Communication </li>
                        <li>Teamwork</li>
                        <li>Problem Solving</li>
                        <li>Time Management</li>
                        <li>Goal-oriented</li>
                    </ul>
                </div>
            </div>

            
        </section>
    )
}

export default Skill;