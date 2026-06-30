import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

import {
  FaMapMarkerAlt,
  FaMars,
  FaVenus,
  FaShieldAlt
} from "react-icons/fa";

import "../styles/PetDetails.css";

function PetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const res = await axios.get(
  `https://pet-adoption-platform-1-aa5h.onrender.com/api/pets/${id}`
);
        setPet(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPet();
  }, [id]);

  if (!pet) {
    return <h2>Loading pet...</h2>;
  }

  return (
    <>
      <Navbar />

      <section className="pet-details">

        <div className="pet-details-image">
          <img src={pet.image} alt={pet.name} />
        </div>

        <div className="pet-details-content">

          <h1>{pet.name}</h1>
          <h3>{pet.breed}</h3>

          <div className="vaccinated-badge">
            <FaShieldAlt /> Vaccinated
          </div>

          <div className="pet-meta">

            <div>
              {pet.gender === "Male" ? <FaMars /> : <FaVenus />}
              {pet.gender}
            </div>

            <div>{pet.age}</div>

            <div>
              <FaMapMarkerAlt /> {pet.location}
            </div>

          </div>

          <p className="pet-description">
            {pet.name} is a friendly and loving companion waiting for a forever home.
          </p>

          <button
            className="adopt-pet-btn"
            onClick={() =>
              navigate("/adopt-form", { state: { pet } })
            }
          >
            Adopt {pet.name} 🐾
          </button>

        </div>

      </section>
    </>
  );
}

export default PetDetails;