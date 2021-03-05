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

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink exact to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="links">
        <div id="hamburger-links">
          <NavLink exact to="/about">
            About
          </NavLink>
          <NavLink exact to="/contact">
            Contact
          </NavLink>
          <NavLink exact to="/growing">
            Growing
          </NavLink>
          <NavLink exact to="/future">
            Future
          </NavLink>
          <NavLink exact to="/packaging">
            Packaging
          </NavLink>
        </div>
        <a className="icon" onClick={toggleMenu}>
          <div className="bars"/>
          <div className="bars"/>
          <div className="bars"/>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
