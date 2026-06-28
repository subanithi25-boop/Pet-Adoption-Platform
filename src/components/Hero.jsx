import "../styles/Hero.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          🐾 Find your perfect companion
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find Your
          <br />
          <span>Forever Friend</span>
        </motion.h1>

        <p>
          Every pet deserves a loving home. Browse adorable pets,
          adopt safely, and give a homeless animal a happy life.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/adopt")}
          >
            Explore Pets <FaArrowRight />
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/contact")}
          >
            Learn More
          </button>

        </div>

        <div className="hero-users">
          ⭐⭐⭐⭐⭐ <span> 5,000+ Happy Families</span>
        </div>

      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80"
          alt="Dog"
        />

        <div className="floating-card">
          ❤️ 1200+ Pets Adopted
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;