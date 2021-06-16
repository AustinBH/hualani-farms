import { Link } from "react-router-dom";

function Farming() {
  return (
    <div>
      <h1>Farming in Harmony With Nature</h1>
      <p>
        Nurtured by the gentle, tropical Hāna rain, refreshed by the gentle
        ocean breeze, and warmed by the Maui sunshine, Hualani Farms produces
        all of its tropical fruit, spices, and plants using environmentally
        intelligent processes to ensure not only a beautiful harvest today, but
        a healthy and sustainable yield well into the future.
      </p>
      <div className="two-grid">
        <img
          src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/farming/photo8.jpg"
          alt="meyer-lemon-blossoms"
        />
        <img
          src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/farming/photo9.jpg"
          alt="blue-butterfly-pea-flower"
        />
      </div>
      <p>
        The future of food is about the soil, about community, nutrition,
        wildlife, education, and collaboration.
      </p>
      <img
        src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/farming/photo10.jpg"
        alt="mixed-citrus"
      />
      <p>
        Every plant grown on our farm is grown and nurtured with love and
        respect for the aina ("land").
      </p>
        <Link to="/growing" onClick={() => window.scroll(0, 0)}>
          <button>
            WHAT'S GROWING NOW
          </button>
        </Link>
    </div>
  );
}

export default Farming;
