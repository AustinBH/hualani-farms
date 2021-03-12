import { NavLink } from "react-router-dom";
import { useState } from 'react';

function Shop() {

  const [state, setState] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    jars: 0
  });

  const handleInputChange = (e) => {
    if (e.target.value < 0) {
      setState((prevProps) => ({
        ...prevProps,
        [e.target.name]: 0
      }));
    } else {
      setState((prevProps) => ({
        ...prevProps,
        [e.target.name]: e.target.value,
      }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <h1>Hualani Nourishing Body Butter</h1>
      <p style={{ textAlign: "left", paddingLeft: "10px" }}>Ingredients:</p>
      <ul style={{ textAlign: "left" }}>
        <li>Coconut Oil</li>
        <li>Cocoa Butter</li>
        <li>Shea Butter</li>
        <li>Marigold Flowers</li>
        <li>Pikake Essential Oil</li>
      </ul>
      <p>
        Unlike lotions and creams, which contain water, body butters nourish and
        protect the skin by sealing in moisture and creating a barrier between
        the skin and the elements such as strong Maui sunshine, and salty marine
        air. Body butters are best suited to skin that tends to be dry and that
        needs protection and nourishment.
      </p>
      <button className="nav-button">
        <NavLink exact to="/packaging" onClick={() => window.scroll(0, 0)}>
          Check out our environmentally intelligent packaging
        </NavLink>
      </button>
      <p>
        Wellness properties:
        <br />
        <br />
        <b>Marigold Flowers -</b> have soothing, softening, and emollient
        properties. Widely used because of its anti-inflammatory and medicinal
        uses. Marigold helps tone the skin, making it look younger and more
        elastic. Marigold also activates the production of collagen and
        glycoproteins. It is very rich in Vitamin E or tocopherol, providing
        flavonoids that strengthen the skin against external aggressions in
        addition to having antioxidant and anti-aging properties.
        <br />
        <br />
        <b>Coconut Oil -</b> reduces inflammation and contains antimicrobial
        properties to protect skin. Contains medium chain fatty acids especially
        important for skin health.
        <br />
        <br />
        <b>Cocoa Butter -</b> helps to form a protective barrier over skin to
        hold in moisture. Is rich in natural plant compounds called
        phytochemicals that may improve blood flow to the skin and slow aging by
        protecting against the sun's harmful UV rays.
        <br />
        <br />
        <b>Shea Butter -</b> high concentrations of fatty acids and vitamins
        make shea butter an ideal cosmetic ingredient for softening skin. Shea
        butter comes from fat extracted from the nuts of the shea tree. It helps
        boost collagen production and contains triterpenes, naturally occurring
        chemical compounds thought to deactivate collagen fiber destruction. It
        also helps promote cell regeneration, reducing the appearance of fine
        lines and wrinkles.
        <br />
        <br />
        <b>Pikake -</b> known as Hawaiian Jasmine. Contains therapeutic and
        aromatherapy benefits, including promoting self-confidence, optimism,
        and hormonal balance.
        <br />
        <br />
        The rich volcanic soil, warm Maui sunshine, gentle misty rain, and the
        mighty power of the Pacific Ocean all get folded into every jar of
        Nourishing Hualani Body Butter.
      </p>
      {/* <form onSubmit={handleSubmit}>
        <header>Order Form:</header>
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
          <label>Address: </label>
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleInputChange}
          />
          <div className="form-control">
            <label>City: </label>
            <input
              type="text"
              name="city"
              value={state.city}
              onChange={handleInputChange}
            />
          </div>
          <label>State: </label>
          <select name="state" value={state.state} onChange={handleInputChange}>
            <option value="" disabled={true}>
              --
            </option>
            <option value="Alabama">AL</option>
            <option value="Alaska">AK</option>
            <option value="Arizona">AZ</option>
            <option value="Arkansas">AR</option>
            <option value="California">CA</option>
            <option value="Colorado">CO</option>
            <option value="Connecticut">CT</option>
            <option value="Delaware">DE</option>
            <option value="Florida">FL</option>
            <option value="Georgia">GA</option>
            <option value="Hawaii">HI</option>
            <option value="Idaho">ID</option>
            <option value="Illinois">IL</option>
            <option value="Indiana">IN</option>
            <option value="Kansas">KS</option>
            <option value="Kentucky">KY</option>
            <option value="Louisiana">LA</option>
            <option value="Maine">ME</option>
            <option value="Maryland">MD</option>
            <option value="Massachusetts">MA</option>
            <option value="Michigan">MI</option>
            <option value="Minnesota">MN</option>
            <option value="Mississippi">MS</option>
            <option value="Missouri">MO</option>
            <option value="Montana">MT</option>
            <option value="Nebraska">NE</option>
            <option value="Nevada">NV</option>
            <option value="New Hampshire">NH</option>
            <option value="New Jersey">NJ</option>
            <option value="New Mexico">NM</option>
            <option value="New York">NY</option>
            <option value="North Carolina">NC</option>
            <option value="North Dakota">ND</option>
            <option value="Ohio">OH</option>
            <option value="Oklahoma">OK</option>
            <option value="Oregon">OR</option>
            <option value="Pennsylvania">PA</option>
            <option value="Rhode Island">RI</option>
            <option value="South Carolina">SC</option>
            <option value="South Dakota">SD</option>
            <option value="Tennessee">TN</option>
            <option value="Texas">TX</option>
            <option value="Utah">UT</option>
            <option value="Vermont">VT</option>
            <option value="Virginia">VA</option>
            <option value="Washington">WA</option>
            <option value="West Virginia">WV</option>
            <option value="Wisconsin">WI</option>
            <option value="Wyoming">WY</option>
          </select>
          <div className="form-control">
            <label>ZIP Code: </label>
            <input
              type="number"
              name="zip"
              value={state.zip}
              onChange={handleInputChange}
            />
          </div>
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
      </form> */}
    </div>
  );
}

export default Shop;
