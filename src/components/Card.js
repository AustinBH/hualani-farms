function Card(props) {

    return (
        <div className="card">
            <img className="card-img" src={props.img} alt={props.name} />
            {props.name}
        </div>
    );

};

export default Card;