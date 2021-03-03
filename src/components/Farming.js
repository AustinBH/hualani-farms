import photo8 from "../media/photo8.jpg";
import photo9 from "../media/photo9.jpg";
import photo10 from "../media/photo10.jpg";
import { NavLink } from "react-router-dom";

function Farming() {
  return (
    <div>
      <h1>Farming in Harmony With Nature</h1>
      <p>
        Nurtured by the gentle, tropical Hāna rain, refreshed by the gentle
        ocean breeze, and warmed by the Maui sunshine, Hualani Farms produces
        all of its tropical fruit, spices, and plants using environmentally
        intelligent processes to ensure not only a beatiful harvest today, but a
        healthy and sustainable yield well into the future
      </p>
      <div className="two-grid">
        <img src={photo8} alt="meyer-lemon-blossoms"/>
        <img src={photo9} alt="blue-butterfly-pea-flower" />
      </div>
      <p>
        The future of food is about the soil, about community, nutrition,
        wildlife, education, and collaboration.
      </p>
      <img src={photo10} alt="mixed-citrus" />
      <p>
        Every plant grown on our farm is grown and nurtured with love and
        respect for the aina ("land").
      </p>
      <button className="nav-button">
        <NavLink exact to="/growing">
          What's Growing Now
        </NavLink>
      </button>
    </div>
  );
}

export default Farming;
