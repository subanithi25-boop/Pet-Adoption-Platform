import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import PetCard from "../components/PetCard";
import "../styles/Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/favorites",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setFavorites(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async (favoriteId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/favorites/${favoriteId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchFavorites();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <section className="favorites-page">
        <div className="favorites-header">
          <h1>My Favorite Pets ❤️</h1>
          <p>
            Keep track of pets you love and revisit them anytime.
          </p>
        </div>

        <div className="pets-grid">
          {favorites.length > 0 ? (
            favorites.map((fav) => (
              <div
                key={fav._id}
                className="favorite-card"
              >
                <PetCard pet={fav.pet} />

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFavorite(fav._id)
                  }
                >
                  Remove ❤️
                </button>
              </div>
            ))
          ) : (
            <div className="empty-favorites">
              <h2>No Favorite Pets Yet 🐾</h2>
              <p>
                Click the heart icon on any pet
                to save it here.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Favorites;