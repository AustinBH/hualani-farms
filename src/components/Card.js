import { useState } from "react";

function Card(props) {

    const [state, setState] = useState({
        display: "hide"
    });

    const displayInfo = () => {
      if (state.display == "hide") {
        setState({ display: "show" });
        //This will go ahead and hide the info after a 20 second delay so that it doesn't constantly clutter the screen
        setTimeout(() => setState({display: "hide"}), 20000);
      } else {
        setState({ display: "hide" });
      }
    };

    return (
      <div className="card">
        <img className="card-img" src={props.img} alt={props.name} />
        <br />
        {props.name}
        <br />
        {props.inStock ? (
          <button className="cart-button">Add to Cart</button>
        ) : (
          <button
            className="cart-button disabled"
            disabled
          >
            Out of Stock
          </button>
        )}
        <button className="cart-button" onClick={() => displayInfo()}>
          More Info
        </button>
        <p className={state.display}>{props.info}</p>
      </div>
    );

};

export default Card;