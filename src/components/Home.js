import photo1 from '../media/photo1.jpg';
import photo2 from "../media/photo2.jpg";
import photo3 from "../media/photo3.jpg";
import photo4 from "../media/photo4.jpg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="nav-quotes">
        <p className="earth">EARTH</p>
        <p className="sky">SKY</p>
        <img src={photo1} alt="hana-sunrise" className="single-photo" />
        <p className="ocean">OCEAN</p>
        <p className="rain">RAIN</p>
      </div>
      <p>
        A family owned and operated organic farm, growing lush tropical fruit
        and exotic spices on the verdant slope of Maui's Haleakala volcano
        ("House of the Sun"). "Hualani" means Heavenly Fruit in Hawaiian. THe
        perfect combination of rich earth ("aina"), boundless sky ("lani"),
        ocean breeze ("malanai"), and abundant Hāna rain creates the idea
        growing conditions to produce and share the bounty of our farm.
      </p>
      <img src={photo2} alt="passion-fruit-flower" />
      <p className="quote">
        <i>
          "Farmers are the "intellectuals of the land". They have the practical
          and rarefied knowledge to choose just the right seeds for a particular
          place to plant them in the most advantageous way, and then tend the
          plants and bring them to their perfect moment of ripeness".
        </i>
        -Carlo Petrini, founder of the Slow Food Movement.
      </p>
      <button className="nav-button">
        <NavLink exact to="/about">
          LEARN MORE ABOUT US
        </NavLink>
      </button>
      <div className="two-grid">
        <img src={photo3} alt="lemon" />
        <img src={photo4} alt="farm-mascot" />
      </div>
    </div>
  );
}

export default Home;
