import { Link } from "react-router-dom";
import { FaPaw, FaSearch } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <FaPaw className="logo-icon" />
        <span>PetCare</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/adopt">Adopt</Link>
        </li>

        <li>
          <Link to="/favorites">Favorites</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/admin">
            Admin
          </Link>
        </li>

        <li>
          <Link to="/add-pet">
            Add Pet
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="nav-right">

        <button className="search-btn">
          <FaSearch />
        </button>

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="register-btn">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;