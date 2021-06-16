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
        <NavLink to="/" onClick={closeMenu}>
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/logo/logo.svg"
            alt="logo"
          />
        </NavLink>
      </div>
      <div className="links">
        <a
          className="insta"
          href="https://www.instagram.com/hualanifarms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/logo/insta-logo.webp"
            alt="instagram-logo"
            longdesc="https://www.flaticon.com/packs/social-network-12"
          />
        </a>
        <a
          className="twitter"
          href="https://www.twitter.com/FarmsHualani/"
          rel="noopener norefferer"
          target="_blank"
        >
          <img
            className="small-icon"
            src="https://image.flaticon.com/icons/png/512/1077/1077032.png"
            alt="twitter-logo"
            longdesc="https://www.flaticon.com/packs/social-network-12"
          />
        </a>
        <a className="icon" onClick={toggleMenu}>
          <div className="bars" />
          <div className="bars" />
          <div className="bars" />
        </a>
        <div id="hamburger-links">
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/growing" onClick={closeMenu}>
            Farm
          </NavLink>
          <NavLink to="/plans" onClick={closeMenu}>
            Future
          </NavLink>
          <NavLink to="/shop" onClick={closeMenu}>
            Shop
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
