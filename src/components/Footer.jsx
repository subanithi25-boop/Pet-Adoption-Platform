import "../styles/Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <h2>🐾 PetCare</h2>
        <p>Helping pets find loving homes.</p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/adopt">Adopt</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>

      <div>
        <h3>Contact</h3>
        <p>support@petcare.com</p>
        <p>+91 9876543210</p>
      </div>

      <div>
        <h3>Follow Us</h3>
        <div className="social">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaGithub />
        </div>
      </div>

    </footer>
  );
}

export default Footer;