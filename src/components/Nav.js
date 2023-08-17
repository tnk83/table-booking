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
          <li>
            <Link className="navbar-item" to="/">Home</Link>
          </li>
          <li>
            <Link className="navbar-item" to="/about">About</Link>
          </li>
          <li>
            <Link className="navbar-item" to="/menu">Menu</Link>
          </li>
          <li>
            <Link className="navbar-item" to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link className="navbar-item" to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link className="navbar-item" to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

