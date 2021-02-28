import logo from '../media/logo.svg';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <NavLink exact to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="links">
        <button className="nav-button">
          <NavLink exact to="/about">
            About
          </NavLink>
        </button>
        <button className="nav-button">
          <NavLink exact to="/contact">
            Contact Us
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
