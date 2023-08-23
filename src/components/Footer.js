import "../styles/Footer.css";
import lemon_logo from "../assets/lemon_logo.png";

function Footer() {
    return (
        <div className="footer-container">
          <div className="content">
            <img className="lemon"
                src={lemon_logo}
                alt="Little Lemon logo"
            />
            <div className="doormat">
                <h5>Doormat Navivation</h5>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Menu</li>
                  <li>Reservations</li>
                  <li>Order Online</li>
                  <li>Login</li>
                </ul>
            </div>
            <div className="contact">
                <h5>Contact</h5>
                <ul>
                  <li>Address</li>
                  <li>Phone number</li>
                  <li>Email</li>
                </ul>
            </div>
            <div className="social">
                <h5>Social Media Links</h5>
                <ul>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Pinterest</li>
                </ul>
            </div>
          </div>
          <p>Copyright by tnk83 @ 2023</p>
        </div>
    );
};

export default Footer;