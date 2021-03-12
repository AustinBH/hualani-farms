import photo20 from '../media/photo20.jpg';
import photo21 from '../media/photo21.jpg';
import photo22 from '../media/photo22.jpg';
import { NavLink } from 'react-router-dom';


function Plans() {

  return (
    <div>
      <h1>Why Small Farms Matter</h1>
      <p>
        Every morning as the sun rises over the mighty Pacific Ocean to greet
        the rich soil on our farm, we are asking ourselves the question "How can
        we farm ethically in a manner that places the lightest impact on our
        fragile island environment allowing us to care for the land and still
        sustainably feed our communities?"
      </p>
      <img src={photo20} alt="hana-sunrise" className="single-photo" />
      <br/>
      <button className="nav-button">
        <NavLink exact to="/contact" onClick={() => window.scroll(0, 0)}>
          WHERE TO FIND US
        </NavLink>
      </button>
      <p>
        Hualani Farms is a proud member of the{" "}
        <a
          href="https://www.hfuuhi.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Hawaii Farmers Union United
        </a>{" "}
        ("HFUU"), Hāna Chapter. You can find us at the{" "}
        <a
          href="https://www.hanafarmersmarket.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Hāna Farmers Market
        </a>
        , every Friday from 3:00 - 5:00 pm, located across from the Hasegawa
        General Store, in the field below the Hāna Ranch Restaurant. Come out to
        the Hāna Farmers Market to support Hāna's hard-working local farmers.
      </p>
      <img src={photo21} alt="farmers-market" />
      <br/>
      <button className="nav-button">
        <NavLink exact to="/preorder" onClick={() => window.scroll(0, 0)}>
          HEAVENLY HUALANI BODY BUTTER: PREORDER ONLINE NOW
        </NavLink>
      </button>
      <p>
        While we grow many varietals of fruit, spices, vegetables, and herbs on
        our farm, Hualani Farms only produces a single item available for sale
        online: a luxurious whipped body butter infused with wild-crafted
        Marigold ("Calendula Officinalis") oil. Handcrafted in small batches,
        incorporating only pure local ingredients of impeccable quality. We use
        a carbon-neutral production process powered by the warm Maui sun. Our
        wild crafted marigold oil used in our body butter is made in small
        batches and undergoes a month long triple filtration process to ensure a
        pure, beautiful product made with aloha.
      </p>
      <img src={photo22} alt="calendula-oil" />
    </div>
  );
}

export default Plans;
