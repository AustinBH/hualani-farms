import { NavLink } from "react-router-dom";

function Preorder() {
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
        the skin and the elements-strong Maui sunshine, salty marine air. Body
        butters are best suited to skin that tends to be dry and that needs
        protection and nourishment.
      </p>
      <button className="nav-button">
        <NavLink exact to="/packaging">
          Check out our environmentally intelligent packaging
        </NavLink>
      </button>
      <p>Wellness properties:</p>
      <p>
        Marigold Flowers - have soothing, softening and emollient properties. Is
        widely used because of its anti-inflammatory and medicinal uses. For
        skin, marigold helps tone the skin, making it look younger and more
        elastic. Marigold also activates the production of collagen and
        glycoproteins. It is very rich in Vitamin E or tocopherol, provides
        flavonoids that strengthen the skin against external aggressions in
        addition to having antioxidant and anti-agin properties.
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
        This nourishing body butter is made at Hualani Farms, a small organic
        farm located in Maka'alae, nestled on the slopes of Haleakala, near
        Hāna, Maui. The rich volcanic soils of the aina, warm Maui sunshine,
        soft tradewinds, rich volcanic soil, gentle misty rain, and the mighty
        power of the Pacific Ocean all get folded into every jar of Nourishing
        Hualani Body Butter.
      </p>
      <p className="quote">Made with meticulous care and abundant aloha.</p>
    </div>
  );
}

export default Preorder;
