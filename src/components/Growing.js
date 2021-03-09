import photo11 from "../media/photo11.jpg";
import photo12 from "../media/photo12.jpg";
import photo13 from "../media/photo13.jpg";
import photo14 from "../media/photo14.jpg";
import photo15 from "../media/photo15.jpg";
import photo16 from "../media/photo16.jpg";
import photo17 from "../media/photo17.jpg";
import photo18 from "../media/photo18.jpg";
import photo19 from "../media/photo19.jpg";
import { NavLink } from "react-router-dom";

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
        <img src={photo12} alt="honey-tangerines" />
        <img src={photo11} alt="citrus-metal" />
        <img src={photo13} alt="washtub-tangelos" />
      </div>
      <p>
        <u>Avocado Varietals</u> such as Malama, Ota, Yamagata, and Kahalu'u.
      </p>
      <img src={photo14} alt="avocado-half" />
      <p>
        <u>Exotics/Spices</u> such as Nutmeg, Cinnamon, Cardamom, and the
        Vanilla Bean Orchid, a beautiful vine that produces the tasty vanilla
        bean much coveted by bakers. At Hualani Farms you will also find Ginger,
        Turmeric (Olena), Soursoup, Surinam Cherry, Lilikoi (Passion Fruit),{" "}
        <a
          href="https://food.ndtv.com/weight-loss/blue-tea-all-you-need-to-know-about-this-herbal-tea-that-may-help-in-weight-loss-1957747"
          rel="noopener noreferrer"
          target="_blank"
        >
          Butterfly Pea Flower Vine
        </a>
        .
      </p>
      <img src={photo15} alt="lilikoi-flower" />
      <p>
        <u>Native Hawaiian Plants</u> such as Hawaiian Sandalwood ("Iliahi"),
        Green Ti, Red Ti, Hawaiian Hibiscus ("Koki'o Ke'oke'o") - the only
        fragrant hibiscus, True Kamani
      </p>
      <p>
        <u>Other Trees and Varietals</u> - Maia (Apple Bananas), Sunrise Papaya,
        Mango, several varietals of Coco Palms and Coconuts, the majestic
        Rainbow Eucalyptus, Magnolia, and several varietals of Bamboo -
        Gracilius, Monastery and Malay Dwarf.
      </p>
      <div className="three-grid">
        <img src={photo16} alt="banana-rack" />
        <img src={photo17} alt="buddha" />
        <img src={photo18} alt="awapuhi-ginger" />
      </div>
      <u>What's Growing in Our Garden?</u>
      <p>
        Vegatables: Mizuna, Eggplant, Red Chard, Spinach, Peppers (Jalapeño,
        Habanero, Hawaiian Chili Peppers), Kale, Tomatoes, Leeks, Arugula,
        Tomatillo, Pole Beans, and Strawberries!
      </p>
      <img src={photo19} alt="strawberries" className="small-single-photo" />
      <p>
        Herbs: Dill, Garlic Chives, Fennel, Basil, Oregano (Cuban and Italian),
        Cilantro, Chives, Pineapple Sage, Calendula, Rosemary, Lemon Thyme,
        English Lavender
      </p>
      <p>
        For the Butterflies and the Bees: Citrus Blossom, Red Sunflower,
        Zinnias, and Cosmos
      </p>
      <button className="nav-button">
        <NavLink exact to="/future" onClick={() => window.scroll(0, 0)}>
          WHAT WE ARE GROWING FOR THE FUTURE
        </NavLink>
      </button>
    </div>
  );
}

export default Growing;
