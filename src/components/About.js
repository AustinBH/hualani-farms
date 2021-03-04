import photo5 from '../media/photo5.jpg';
import photo6 from '../media/photo6.jpg';
import photo7 from '../media/photo7.jpg';
import { NavLink } from "react-router-dom";

function About() {
    return (
      <div>
        <h1>Who We Are</h1>
        <p>
          Hualani Farms is a family owned organic farm in Maka'alae, on the
          verdant slope of Haleakala (Maui's "House of the Sun") surrounded by
          the boundless beauty of the Pacific Ocean, located approximately 3
          miles south of Hāna, our farm lies at the culmination of one of
          the most breathtaking drives to experience on Planet Earth, along the
          famous Hāna Highway, a stunningly beautiful journey of 52 miles of
          winding road following the rugged Hāna coastline, with 617 hairpin
          curves, 59 one lane bridges, bamboo forests, and 10 unbelievable
          waterfalls. At the end of the journey our farm lies about 1/4 mile up
          mauka (mountainside) on a road best travelled by Jeep or 4WD,
          preferably already covered in mud.
        </p>
        <div className="three-grid">
          <img src={photo5} alt="gushing-waterfall" />
          <img src={photo6} alt="double-rainbow" />
          <img src={photo7} alt="big-island" />
        </div>
        <p>
          We maintain a personal commitment to a carbon neutral 100% sustainable
          farm model. Our farm is completely "off the grid". We obtain all our
          power from the Maui sunshine, and all our water from the pure and
          nourishing Hāna rain, allowing us to sustainably grow and harvest
          citrus, spices, vegetables, and herbs in some of the richest volcanic
          soil available on the planet, with minimal impact on the earth.
        </p>
        <button className="nav-button">
          <NavLink exact to="/farming">
            FARMING IN HARMONY WITH NATURE
          </NavLink>
        </button>
      </div>
    );
};

export default About;
