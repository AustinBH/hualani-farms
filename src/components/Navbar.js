import { NavLink } from 'react-router-dom';

function Navbar() {

  const toggleMenu = () => {
    const menuStatus = document.getElementById("hamburger-links");
    if (menuStatus.style.display == "block") {
      menuStatus.style.display = "none";
      menuStatus.className = "";
    } else {
      menuStatus.style.display = "block";
      menuStatus.className = "animated-menu";
    };
  };

  const closeMenu = () => {
    const menu = document.getElementById("hamburger-links");
    if (menu.style.display == "block") {
      menu.style.display = "none";
      menu.className = "";
    }
    window.scroll(0,0);
  }

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink exact to="/" onClick={closeMenu}>
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/logo/logo.svg"
            alt="logo"
          />
        </NavLink>
      </div>
      <div className="links">
        <a className="insta" href="" rel="noopener noreferrer">
          <img
            src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
            alt="instagram-logo"
          />
        </a>
        <a className="twitter" href="" rel="noopener norefferer">
          <img
            src="https://img-premium.flaticon.com/png/512/60/60580.png?token=exp=1623552708~hmac=961a91b05e207c140e1fe4ffd5759c3f"
            alt="twitter-logo"
          />
        </a>
        <a className="icon" onClick={toggleMenu}>
          <div className="bars" />
          <div className="bars" />
          <div className="bars" />
        </a>
        <div id="hamburger-links">
          <NavLink exact to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink exact to="/growing" onClick={closeMenu}>
            Farm
          </NavLink>
          <NavLink exact to="/plans" onClick={closeMenu}>
            Future
          </NavLink>
          <NavLink exact to="/shop" onClick={closeMenu}>
            Shop
          </NavLink>
          <NavLink exact to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
