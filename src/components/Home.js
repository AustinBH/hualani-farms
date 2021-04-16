import photo1 from '../media/photo1.jpg';
import photo2 from "../media/photo2.jpg";
import photo3 from "../media/photo3.jpg";
import photo4 from "../media/photo4.jpg";
import photo27 from "../media/photo27.jpg";
import photo28 from "../media/photo28.jpg";
import photo29 from "../media/photo29.jpg";
import photo30 from "../media/photo30.jpg";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div>
      <p>
        A family owned and operated organic farm, growing lush tropical fruit
        and exotic spices on the verdant slope of Maui's Haleakala volcano
        ("House of the Sun"). "Hualani" means Heavenly Fruit. The perfect
        combination of rich earth ("āina"), boundless sky ("lani"), ocean breeze
        ("malanai"), and abundant Hāna rain creates the ideal growing conditions
        to produce and share the bounty of our farm.
      </p>
      <div className="carousel-holder">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          <img src={photo1} alt="hana-sunrise" />
          <img src={photo3} alt="lemon" />
          <img src={photo2} alt="passion-fruit-flower" />
          <img src={photo27} alt="rainbow" />
          <img src={photo28} alt="blossom-in-cup" />
          <img src={photo29} alt="flower-on-tree" />
          <img src={photo30} alt="leaf" />
        </Carousel>
      </div>
      <p className="quote">
        <i>
          "Farmers are the "intellectuals of the land". They have the practical
          and rarefied knowledge to choose just the right seeds for a particular
          place to plant them in the most advantageous way, and then tend the
          plants and bring them to their perfect moment of ripeness".
        </i>{" "}
        -Carlo Petrini, founder of the Slow Food Movement.
      </p>
      <button className="nav-button">
        <NavLink exact to="/about" onClick={() => window.scroll(0, 0)}>
          LEARN MORE ABOUT US
        </NavLink>
      </button>
      <br />
      <img src={photo4} alt="farm-mascot" />
      <p>Fritz, farm mascot</p>
    </div>
  );
}

export default Home;
