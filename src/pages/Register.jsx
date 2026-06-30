import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import {
  FaUser,
  FaEnvelope,
  FaLock
} from "react-icons/fa";

import "../styles/Auth.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
  "http://localhost:5000/api/auth/register",
  formData
);

      alert("Registration successful!");

      navigate("/login");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );
    }
  };

  return (
    <>
      <Navbar />

      <section className="auth-page">
        <div className="auth-card">
          <h1>Create Account 🐾</h1>

          <p>
            Join our pet adoption community
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <FaEnvelope />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <FaLock />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="auth-btn"
            >
              Register
            </button>
          </form>

          <div className="auth-footer">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;