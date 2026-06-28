import { useState } from "react";
import "../styles/Contact.css";
import { motion } from "framer-motion";

import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully 💌");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>📩 Contact Us</h2>
        <p>We’d love to hear from you!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <FaUser />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaCommentDots />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Send Message 🚀</button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;