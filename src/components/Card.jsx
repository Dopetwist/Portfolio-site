

function Card(props) {
    return (
        <div className="card">
            <figure>
                <img src={props.image} alt="Project Image" />
            </figure>
            
            <h2> {props.title} </h2>
            <p> {props.descrp} </p>
            <a href={props.link}>
                <button> View Code </button>
            </a>
            <p> {props.tech} </p>
        </div>
    )
}

export default Card;