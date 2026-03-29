import { ExternalLink } from "lucide-react";

function Card(props) {
    return (
        <div className="card">
            <figure>
                <img src={props.image} alt="Project Image" loading="lazy" />
            </figure>
                
            <div className="details">
                <h2 className="title"> {props.title} </h2>
                <p className="descrp"> {props.descrp} </p>
                <div className="links">
                    <a href={props.link} target="blank">
                        <button className="btn"> View Code <img src="/images/svgs/github-small.svg" alt="Github Icon" /> </button>
                    </a>
                    {props.live && (
                        <a href={props.live} target="blank">
                            <button className="btn link-btn"> Live Demo <ExternalLink size={20} id="link-icon" /> </button>
                        </a>
                    )}
                </div>
                <p className="tech"> {props.tech} </p>
            </div>
        </div>
    )
}

export default Card;