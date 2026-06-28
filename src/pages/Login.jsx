import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "../styles/Auth.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      console.log("Login Response:", res.data);

      if (!res.data.token) {
        alert("Token not received from backend");
        return;
      }

      localStorage.setItem("token", res.data.token);

      const user = {
        name: res.data.user.name,
        email: res.data.user.email,
        role: res.data.user.role || "user"
      };

      localStorage.setItem("user", JSON.stringify(user));

      console.log("Saved User:", user);

      alert("Login successful!");
      if (user.role === "admin") {
        navigate("/admin");   
      } else {
        navigate("/");       
      }

    } catch (error) {
      console.log("Login Error:", error.response?.data);

      alert(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <>
      <Navbar />

      <section className="auth-page">
        <div className="auth-card">
          <h1>Welcome Back 👋</h1>

          <p>Login to continue your pet adoption journey</p>

          <form onSubmit={handleSubmit}>
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

            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>

          <div className="auth-footer">
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;