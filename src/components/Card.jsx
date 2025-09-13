

function Card(props) {
    return (
        <div className="card">
            <figure>
                <img src={props.image} alt="Project Image" loading="lazy" />
            </figure>
                
            <div className="details">
                <h2 className="title"> {props.title} </h2>
                <p className="descrp"> {props.descrp} </p>
                <a href={props.link} target="blank">
                    <button className="btn"><img src="/src/assets/github-small.svg" alt="Github Icon" /> View Code </button>
                </a>
                <p className="tech"> {props.tech} </p>
            </div>
        </div>
    )
}

export default Card;