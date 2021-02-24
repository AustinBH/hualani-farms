import photo11 from "../media/photo11.jpg";
import photo12 from "../media/photo12.jpg";
import photo13 from "../media/photo13.jpg";
import photo14 from "../media/photo14.jpg";
import photo15 from "../media/photo15.jpg";
import photo16 from "../media/photo16.jpg";
import photo17 from "../media/photo17.jpg";
import photo18 from "../media/photo18.jpg";
import photo19 from "../media/photo19.jpg";
import photo20 from "../media/photo20.jpg";
import photo21 from "../media/photo21.jpg";
import photo22 from "../media/photo22.jpg";
import { NavLink } from "react-router-dom";

function Growing() {
  return (
    <div>
      <header>What's Growing Now</header>
      <p>
        Nurtured by the gentle, tropical Hāna rain, refreshed by the gentle
        ocean breeze, and warmed by the Maui sunshine, Hualani Farms produces
        all of its tropical fruit, spices, and plants using environmentally
        intelligent processes to ensure not only a beatiful harvest today, but a
        healthy and sustainable yield well into the future
      </p>
      <img src={photo11} alt="citrus-metal" />
      <img src={photo12} alt="honey-tangerines" />
      <img src={photo13} alt="washtub-tangelos" />
      <p>
        <u>Avocado Varietals</u> such as Malana, Ota, Yamagata, and Kahalu'u.
      </p>
      <img src={photo14} alt="avocado-half" />
      <p>
        <u>Exotics/Spices</u> such as Nutmeg, Cinnamon, Cardamom, Ginger,
        Turmeric (Olena), Soursoup, Surinam Cherry, Lilikoi (Passion Fruit),
        Butterfly Pea Flower Vine, and Magnolia.
      </p>
      <img src={photo15} alt="lilikoi-flower" />
      <p>
        <u>Native Hawaiian Plants</u> such as Hawaiian Sandalwood ("Fliahi"),
        Green Ti, Red Ti, Hawaiian Hibiscus ("Kokoi Keokeo") - the only fragrant
        hibiscus, True Kamani, Vivee
      </p>
      <p>
        <u>Other Trees and Varietals</u> - Maia (Apple Bananas), Sunrise Papaya,
        Mango, several varietals of Coco Palms and Coconuts, Rinbow Eucalyptus,
        varietals of Bamboo - Gracilius, Monastery and Malay Dwarf.
      </p>
      <img src={photo16} alt="banana-rack" />
      <img src={photo17} alt="buddha" />
      <img src={photo18} alt="awapuhi-ginger" />
      <p>
        <u>What's Growing in the Garden Now?</u>
        <p>
          Vegatables: Mizuna, Eggplant, Red Chard, Spinach, Peppers (Jalapeño,
          Habanero, Hawaiian Chili Peppers), Kale, Tomates, Leeks, Arugula,
          Tomatillo, Pole Beans, and Strawberries!
        </p>
      </p>
      <img src={photo19} alt="strawberries" />
      <p>
        Herbs: Dill, Garlic Chives, Fennel, basil, Oregano (Cuban and Italian),
        Cilantro, Chives, Pineapple Sage, Calendula, Rosemary, Lemon Thyme,
        English Lavender
      </p>
      <p>
        For the Butterflies and the Bees: Citrus Blossom, Red Sunflower,
        Zinnias, and Cosmos
      </p>
      <NavLink exact to="/future">
        WHAT WE ARE GROWING FOR THE FUTURE
      </NavLink>
      <p>
        Every morning as the sun rises over the mighty Pacific Ocean to greet
        the rich soil on our farm, we are asking ourselves the question "How can
        we farm ethically in a manner that places the lightest impact on our
        fragile island environment allowing us to care for the land and still
        sustainably feed our communities?"
      </p>
      <img src={photo20} alt="hana-sunrise" />
      <p></p> {/* Bandaid need to properly space this later */}
      <NavLink exact to="/contact">
        WHERE TO FIND US
      </NavLink>
      <p>
        Hualani Farms is a proud member of the {" "}
        <a
          href="https://www.hfuuhi.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Hawaii Farmers Union United
        </a>{" "}
        ("HFUU"), Hāna Chapter. You can find us at the Hāna Farmers Market,
        every Friday from 3:00 - 5:00 pm, located across from the Hasegawa
        General Store, in the field below the Hāna Ranch Restaurant. Come out to
        the Hāna Farmers Market to support Hāna's hard-working local farmers.
      </p>
      <img src={photo21} alt="farmers-market" />
      <p></p> {/* Bandaid need to properly space this later */}
      <NavLink exact to="/preorder">
        HEAVENLY HUALANI BODY BUTTER: PREORDER ONLINE NOW
      </NavLink>
      <p>
        Hualani Farms produces a luxurious calendula whipped body butter.
        Handcrafted in small batches, using only pure local ingredients of
        impeccable quality, using a carbon-neutral production process powered by
        the warm Maui sun and fresh Hāna rain water that undergoes a triple
        filtration process to ensure a pure, beatiful product made with aloha.
      </p>
      <img src={photo22} alt="calendula-oil" />
    </div>
  );
}

export default Growing;
