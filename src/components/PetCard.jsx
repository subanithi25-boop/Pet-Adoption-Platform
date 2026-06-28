import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaMars,
  FaVenus
} from "react-icons/fa";

import { useFavorites } from "../context/FavoritesContext";

import "../styles/PetCard.css";

function PetCard({ pet }) {
  const navigate = useNavigate();

  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some(
    (item) => item._id === pet._id
  );

  return (
    <motion.div
      className="pet-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      
      <div className="pet-image-wrapper">
        <img
          src={pet.image}
          alt={pet.name}
          className="pet-image"
        />

        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(pet);
          }}
        >
          <FaHeart />
        </button>
      </div>

      <Link to={`/pet/${pet._id}`} className="pet-link">
        <div className="pet-content">
          <h3>{pet.name}</h3>

          <p className="breed">{pet.breed}</p>

          <div className="pet-info">
            <span>
              {pet.gender === "Male" ? <FaMars /> : <FaVenus />}
              {pet.gender}
            </span>

            <span>{pet.age} Years</span>
          </div>

          <div className="location">
            <FaMapMarkerAlt />
            <span>{pet.category}</span>
          </div>
        </div>
      </Link>
      <button
        className="adopt-now-btn"
        onClick={() =>
          navigate("/adopt-form", {
            state: { pet }
          })
        }
      >
        Adopt Me 🐾
      </button>
    </motion.div>
  );
}

export default PetCard;