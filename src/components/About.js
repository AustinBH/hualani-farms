import photo5 from '../media/photo5.jpg';
import photo6 from '../media/photo6.jpg';
import photo7 from '../media/photo7.jpg';
import { NavLink } from "react-router-dom";

function About() {
    return (
      <div>
        <header>Who We Are</header>
        <p>
          Hualani Farms is a family owned organic farm in Maka'alae, on the
          verdant slope of Haleakala (Maui's "House of the Sun") surrounded by
          the boundless beauty of the Pacific Ocean. Located approximately 3
          miles south of Hāna, Maui, at the culmination of one of the most
          breath taking views on Planet Earth, the famous Hāna Highway, a
          stunningly beautiful journey along 52 miles of winding road following
          the rugged Hāna coastline, passing 617 hairpin curves, 59 one lane
          bridges, bamboo forests and 10 unbelievable waterfalls, about 1/4 mile
          up mauka (mountainside) on a road best travelled by Jeep or 4WD,
          preferably already covered in mud.
        </p>
        <img src={photo5} alt="gushing-waterfall" />
        <img src={photo6} alt="double-rainbow" />
        <img src={photo7} alt="big-island" />
        <p>
          We maintain a personal commitment to a carbon neutral 100% sustainable
          farm model Our farm is completely "off the grid". We obtain all our
          power from the vibrant Maui sunshine, water from the pure and
          nourishing Hāna rain, allowing us to sustainably grow and harvest
          citrus, spices, vegetables, and herbs in some of the richest volcanic
          soil available on the planet.
        </p>
        <button>
          <NavLink exact to="/farming">
            FARMING IN HARMONY WITH NATURE
          </NavLink>
        </button>
      </div>
    );
};

export default About;
