import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import axios from "axios";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await axios.get(
        "http://localhost:5000/api/favorites",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const pets = res.data.map((fav) => fav.pet);

      setFavorites(pets);
    } catch (error) {
      console.log("Fetch favorites error:", error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetchFavorites();
    }
  }, []);
  const toggleFavorite = async (pet) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      const exists = favorites.some(
        (item) => item._id === pet._id
      );
      if (exists) {
        await axios.delete(
          `http://localhost:5000/api/favorites/${pet._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setFavorites((prev) =>
          prev.filter((item) => item._id !== pet._id)
        );
      }
      else {
        await axios.post(
          "http://localhost:5000/api/favorites",
          {
            pet: pet._id
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setFavorites((prev) => [...prev, pet]);
      }
    } catch (error) {
      console.log("Toggle favorite error:", error);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        fetchFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () =>
  useContext(FavoritesContext);