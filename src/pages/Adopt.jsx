import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import PetCard from "../components/PetCard";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";

import "../styles/Adopt.css";

function Adopt() {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/pets");
      setPets(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ SAFE FILTER LOGIC (FIXED)
  const filteredPets = pets.filter((pet) => {
    const searchText = search.toLowerCase().trim();

    const searchMatch =
      pet.name?.toLowerCase().includes(searchText) ||
      pet.type?.toLowerCase().includes(searchText) ||
      pet.breed?.toLowerCase().includes(searchText);

    const filterMatch =
      filter === "all"
        ? true
        : pet.category?.toLowerCase() === filter.toLowerCase() ||
          pet.gender?.toLowerCase() === filter.toLowerCase();

    return searchMatch && filterMatch;
  });

  return (
    <>
      <Navbar />

      <section className="adopt-page">
        <div className="adopt-container">

          {/* HEADER */}
          <div className="adopt-header">
            <h1>Find Your Pet 🐾</h1>
            <p>Find your perfect companion and give them a loving home.</p>
          </div>

          {/* CONTROLS */}
          <div className="adopt-controls">
            <SearchBar search={search} setSearch={setSearch} />
            <FilterButtons filter={filter} setFilter={setFilter} />
          </div>

          {/* PET GRID */}
          <div className="pets-grid">
            {filteredPets.length > 0 ? (
              filteredPets.map((pet) => (
                <PetCard key={pet._id} pet={pet} />
              ))
            ) : pets.length > 0 ? (
              <div className="no-results">
                <h2>No pets found 🐾</h2>
                <p>Try searching "dog", "cat" or change filters</p>
              </div>
            ) : (
              <div className="no-results">
                <h2>Loading pets...</h2>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}

export default Adopt;