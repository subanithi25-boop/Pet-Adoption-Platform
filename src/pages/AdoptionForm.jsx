import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AdoptionForm.css";
import { motion } from "framer-motion";

import { FaUser, FaPhone, FaEnvelope, FaHome } from "react-icons/fa";

function AdoptionForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const pet = location.state?.pet;

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pet) {
      alert("Pet data missing");
      navigate("/adopt");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

     await axios.post(
  "https://pet-adoption-platform-1-aa5h.onrender.com/api/adoptions",
  {
    pet: pet._id,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    address: formData.address,
    status: "Pending"
  },
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);

      alert("Adoption request submitted ❤️");

      navigate("/success");

    } catch (err) {
      console.log(err);
      alert("Failed to submit adoption request");
    } finally {
      setLoading(false);
    }
  };

  if (!pet) {
    return (
      <div style={{ textAlign: "center", padding: "100px" }}>
        <h2>⚠️ No pet selected</h2>
        <button onClick={() => navigate("/adopt")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="adoption-page">

      <motion.div
        className="adoption-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h2>🐾 Adoption Form</h2>

        <div className="pet-preview">
          <img src={pet.image} alt={pet.name} />
          <h3>{pet.name}</h3>
        </div>

        <form onSubmit={handleSubmit}>

          <div>
            <FaUser />
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <FaEnvelope />
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <FaPhone />
            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <FaHome />
            <input
              name="address"
              placeholder="Address"
              onChange={handleChange}
              required
            />
          </div>

          <button disabled={loading}>
            {loading ? "Submitting..." : "Confirm Adoption 🐾"}
          </button>

        </form>

      </motion.div>
    </div>
  );
}

export default AdoptionForm;