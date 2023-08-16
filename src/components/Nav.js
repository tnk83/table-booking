import logo from "../assets/logo.svg";
import "../styles/Nav.css";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav className="navbar">
        <img className="navbar-logo"
            width="200px"
            src={logo}
            alt="Little Lemon logo"
        />
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-items">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-items">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="navbar-items">
            <Link to="/reservations">Reservations</Link>
          </li>
          <li className="navbar-items">
            <Link to="/order-online">Order Online</Link>
          </li>
          <li className="navbar-items">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

