import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../styles/AddPet.css";

function AddPet() {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    category: "",
    gender: "",
    description: ""
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setImage(e.target.files[0]);
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const data = new FormData();

      data.append("name", formData.name);
      data.append("breed", formData.breed);
      data.append("age", formData.age);
      data.append("category", formData.category);
      data.append("gender", formData.gender);
      data.append(
        "description",
        formData.description
      );

      if (image) {
        data.append("image", image);
      }

      await axios.post(
  "https://pet-adoption-platform-1-aa5h.onrender.com/api/pets",
  data,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  }
);

      alert("Pet added successfully!");

      setFormData({
        name: "",
        breed: "",
        age: "",
        category: "",
        gender: "",
        description: ""
      });

      setImage(null);
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
          "Failed to add pet"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="add-pet-page">
        <div className="add-pet-card">
          <h1>Add New Pet 🐾</h1>

          <form
            className="add-pet-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Pet Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="breed"
              placeholder="Breed"
              value={formData.breed}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Category
              </option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Rabbit">
                Rabbit
              </option>
              <option value="Bird">Bird</option>
              <option value="Fish">Fish</option>
            </select>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Gender
              </option>
              <option value="Male">
                Male
              </option>
              <option value="Female">
                Female
              </option>
            </select>

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
            />

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />

            <button
              className="add-pet-btn"
              type="submit"
            >
              Add Pet 🐾
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddPet;