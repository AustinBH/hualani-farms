import { NavLink } from 'react-router-dom';

function Ingredients() {

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
          Unlike lotions and creams, which contain water, body butters nourish
          and protect the skin by sealing in moisture and creating a barrier
          between the skin and the elements such as strong Maui sunshine, and
          salty marine air. Body butters are best suited to skin that tends to
          be dry and that needs protection and nourishment.
        </p>
        <button className="nav-button">
          <NavLink exact to="/packaging" onClick={() => window.scroll(0, 0)}>
            CHECK OUT OUR ENVIRONMENTALLY INTELLIGENT PACKAGING
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
          properties to protect skin. Contains medium chain fatty acids
          especially important for skin health.
          <br />
          <br />
          <b>Cocoa Butter -</b> helps to form a protective barrier over skin to
          hold in moisture. Is rich in natural plant compounds called
          phytochemicals that may improve blood flow to the skin and slow aging
          by protecting against the sun's harmful UV rays.
          <br />
          <br />
          <b>Shea Butter -</b> high concentrations of fatty acids and vitamins
          make shea butter an ideal cosmetic ingredient for softening skin. Shea
          butter comes from fat extracted from the nuts of the shea tree. It
          helps boost collagen production and contains triterpenes, naturally
          occurring chemical compounds thought to deactivate collagen fiber
          destruction. It also helps promote cell regeneration, reducing the
          appearance of fine lines and wrinkles.
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
      </div>
    );

};

export default Ingredients;