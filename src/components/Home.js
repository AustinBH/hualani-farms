import { Link } from "react-router-dom";
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
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/home/photo1.jpg"
            alt="hana-sunrise"
          />
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/home/photo3.jpg"
            alt="lemon"
          />
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/home/photo2.jpg"
            alt="passion-fruit-flower"
          />
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/home/photo27.jpg"
            alt="rainbow"
          />
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/home/photo28.jpg"
            alt="blossom-in-cup"
          />
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/home/photo29.jpg"
            alt="flower-on-tree"
          />
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/home/photo30.jpg"
            alt="leaf"
          />
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
        <Link to="/about" onClick={() => window.scroll(0, 0)}>
          <button>
            LEARN MORE ABOUT US
          </button>
        </Link>
      <p style={{ fontSize: "16px" }}>Fritz, farm mascot</p>
      <img
        src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/home/photo4.jpg"
        alt="farm-mascot"
      />
    </div>
  );
}

export default Home;
