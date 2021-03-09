import logo from '../media/logo.svg';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const toggleMenu = () => {
    const menuStatus = document.getElementById("hamburger-links");
    if (menuStatus.style.display == "block") {
      menuStatus.style.display = "none";
    } else {
      menuStatus.style.display = "block";
    };
  };

  const closeMenu = () => {
    const menu = document.getElementById("hamburger-links");
    if (menu.style.display == "block") {
      menu.style.display = "none";
    }
    window.scroll(0,0);
  }

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink exact to="/" onClick={closeMenu}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="links">
        <a className="icon" onClick={toggleMenu}>
          <div className="bars" />
          <div className="bars" />
          <div className="bars" />
        </a>
        <div id="hamburger-links">
          <NavLink exact to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink exact to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink exact to="/growing" onClick={closeMenu}>
            Growing
          </NavLink>
          <NavLink exact to="/future" onClick={closeMenu}>
            Future
          </NavLink>
          <NavLink exact to="/packaging" onClick={closeMenu}>
            Packaging
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
