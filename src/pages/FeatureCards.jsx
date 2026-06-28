import {
  FaPaw,
  FaShieldAlt,
  FaHeart
} from "react-icons/fa";

import "../styles/Home.css";

function FeatureCards() {
  return (
    <section className="features">

      <div className="feature-card">
        <FaPaw />
        <h3>Verified Pets</h3>
        <p>
          Every pet is health checked and verified.
        </p>
      </div>

      <div className="feature-card">
        <FaHeart />
        <h3>Loving Homes</h3>
        <p>
          Helping pets find caring families.
        </p>
      </div>

      <div className="feature-card">
        <FaShieldAlt />
        <h3>Safe Adoption</h3>
        <p>
          Secure and transparent adoption process.
        </p>
      </div>

    </section>
  );
}

export default FeatureCards;