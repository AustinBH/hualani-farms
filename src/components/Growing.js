import { Link } from "react-router-dom";

function Growing() {
  return (
    <div>
      <h1>What's Growing Now</h1>
      <p>
        Our citrus orchard contains Honey Tangerines, Eureka and Meyer Lemons,
        Tangelos, Pink Grapefruit, and four varietals of lime including Tahitian
        Lime, Keffir Lime, Calamondin Lime, and the Citrus Australasica ("finger
        limes").
      </p>
      <div className="three-grid">
        <img
          src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/growing/photo12.jpg"
          alt="honey-tangerines"
        />
        <img
          src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/growing/photo11.jpg"
          alt="citrus-metal"
        />
        <img
          src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/growing/photo13.jpg"
          alt="washtub-tangelos"
        />
      </div>
      <p>
        <u>Avocado Varietals</u> such as Malama, Ota, Yamagata, and Kahalu'u.
      </p>
      <img
        src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/growing/photo14.jpg"
        alt="avocado-half"
      />
      <p>
        <u>Exotics/Spices</u> such as Nutmeg, Cinnamon, Cardamom, and the
        Vanilla Bean Orchid, a beautiful vine that produces the tasty vanilla
        bean much coveted by bakers. At Hualani Farms you will also find Ginger,
        Turmeric (Olena), Soursop, Surinam Cherry, Lilikoi (Passion Fruit),{" "}
        <a
          href="https://food.ndtv.com/weight-loss/blue-tea-all-you-need-to-know-about-this-herbal-tea-that-may-help-in-weight-loss-1957747"
          rel="noopener noreferrer"
          target="_blank"
        >
          Butterfly Pea Flower Vine
        </a>
        .
      </p>
      <img
        src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/growing/photo15.jpg"
        alt="lilikoi-flower"
      />
      <p>
        <u>Native Hawaiian Plants</u> such as Hawaiian Sandalwood ("Iliahi"),
        Green Ti, Red Ti, Hawaiian Hibiscus ("Koki'o Ke'oke'o") - the only
        fragrant hibiscus, True Kamani
        <br />
        <br />
        <u>Other Trees and Varietals</u> - Maia (Apple Bananas), Sunrise Papaya,
        Mango, several varietals of Coco Palms and Coconuts, the majestic
        Rainbow Eucalyptus, Magnolia, and several varietals of Bamboo -
        Gracilius, Monastery and Malay Dwarf.
      </p>
      <div className="three-grid">
        <img
          src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/growing/photo16.jpg"
          alt="banana-rack"
        />
        <img
          src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/growing/photo17.jpg"
          alt="buddha"
        />
        <img
          src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/growing/photo18.jpg"
          alt="awapuhi-ginger"
        />
      </div>
      <u>What's Growing in Our Garden?</u>
      <p>
        Vegatables: Mizuna, Eggplant, Red Chard, Spinach, Peppers (Jalapeño,
        Habanero, Hawaiian Chili Peppers), Kale, Tomatoes, Leeks, Arugula,
        Tomatillo, Pole Beans, and Strawberries!
      </p>
      <img
        src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/growing/photo19.jpg"
        alt="strawberries"
        className="small-single-photo"
      />
      <p>
        Herbs: Dill, Garlic Chives, Fennel, Basil, Oregano (Cuban and Italian),
        Cilantro, Chives, Pineapple Sage, Calendula, Rosemary, Lemon Thyme,
        English Lavender
        <br />
        <br />
        For the Butterflies and the Bees: Citrus Blossom, Red Sunflower,
        Zinnias, and Cosmos
      </p>
        <Link to="/plans" onClick={() => window.scroll(0, 0)}>
          <button>
            WHY SMALL FARMS MATTER
          </button>
        </Link>
    </div>
  );
}

export default Growing;
