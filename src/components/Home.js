import photo1 from '../media/photo1.jpg';
import photo2 from "../media/photo2.jpg";
import photo3 from "../media/photo3.jpg";
import photo4 from "../media/photo4.jpg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <img src={photo1} alt="hana-sunrise" />
      <p>
        A family owned and operated organic farm, growing lush tropical fruit
        and exotic spices on the verdant slope of Maui's Haleakala volcano
        ("House of the sun")
      </p>
      <img src={photo2} alt="passion-fruit-flower" />
      <NavLink exact to="/about">
        LEARN MORE ABOUT US
      </NavLink>
      <img src={photo3} alt="lemon" />
      <img src={photo4} alt="farm-mascot" />
      <p className="quote">
        <i>
          "Farmers are the "itellectuals of the land". They have the practical
          and rarefied knowledge to choose just the right seeds for a particular
          place to plant them in the most advantageous way, and then tend the
          plants and bring them to their perfect moement of ripeness".
        </i>
        -Carlo Petrini, founder of the slow food movement.
      </p>
    </div>
  );
}

export default Home;
