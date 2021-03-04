import { NavLink } from "react-router-dom";
import { useState } from 'react';

function Preorder() {

  const [state, setState] = useState({
    name: "",
    address: "",
    jars: 0
  });

  const handleInputChange = (e) => {
    setState((prevProps) => ({
      ...prevProps,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <h1>Hualani Nourishing Body Butter</h1>
      <p>
        Ingredients:
        <ul style={{ textAlign: "left" }}>
          <li>Coconut Oil</li>
          <li>Cocoa Butter</li>
          <li>Shea Butter</li>
          <li>Marigold Flowers</li>
          <li>Pikake Essential Oil</li>
        </ul>
      </p>
      <p>
        Unlike lotions and creams, which contain water, body butters nourish and
        protect the skin by sealing in moisture and creating a barrier between
        the skin and the elements such as strong Maui sunshine, and salty marine
        air. Body butters are best suited to skin that tends to be dry and that
        needs protection and nourishment.
      </p>
      <button className="nav-button">
        <NavLink exact to="/packaging">
          Check out our environmentally intelligent packaging
        </NavLink>
      </button>
      <p>Wellness properties:</p>
      <p>
        Marigold Flowers - have soothing, softening, and emollient properties.
        Widely used because of its anti-inflammatory and medicinal uses.
        Marigold helps tone the skin, making it look younger and more elastic.
        Marigold also activates the production of collagen and glycoproteins. It
        is very rich in Vitamin E or tocopherol, providing flavonoids that
        strengthen the skin against external aggressions in addition to having
        antioxidant and anti-aging properties.
      </p>
      <p>
        Coconut Oil - reduces inflammation and contains antimicrobial properties
        to protect skin. Contains medium chain fatty acids especially important
        for skin health.
      </p>
      <p>
        Cocoa Butter - helps to form a protective barrier over skin to hold in
        moisture. Is rich in natural plant compounds called phytochemicals that
        may improve blood flow to the skin and slow aging by protecting against
        the sun's harmful UV rays.
      </p>
      <p>
        Shea Butter - high concentrations of fatty acids and vitamins make shea
        butter an ideal cosmetic ingredient for softening skin. Shea butter
        comes from fat extracted from the nuts of the shea tree. It helps boost
        collagen production and contains triterpenes, naturally occurring
        chemical compounds thought to deactivate collagen fiber destruction. It
        also helps promote cell regeneration, reducing the appearance of fine
        lines and wrinkles.
      </p>
      <p>
        Pikake - known as Hawaiian Jasmine. Contains therapeutic and
        aromatherapy benefits, including promoting self-confidence, optimism,
        and hormonal balance.
      </p>
      <p>
        The rich volcanic soils of the aina, warm Maui sunshine, gentle misty
        rain, and the mighty power of the Pacific Ocean all get folded into
        every jar of Nourishing Hualani Body Butter.
      </p>
      <p className="quote">Made with meticulous care and abundant aloha.</p>
      <form onSubmit={handleSubmit}>
        <header>Hualani Nourishing Body Butter</header>
        <div className="form-control">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Shipping Address: </label>
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Number of Jars: </label>
          <input
            type="number"
            name="jars"
            value={state.jars}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Preorder;
