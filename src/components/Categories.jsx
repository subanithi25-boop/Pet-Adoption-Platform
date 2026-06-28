import "../styles/Categories.css";
import { useNavigate } from "react-router-dom";

function Categories() {

  const navigate = useNavigate();

  const pets = [
    {
      name: "Dogs",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Cats",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Rabbits",
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Birds",
      image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="categories">

      <h2>Find Your Perfect Companion</h2>
      <p>Choose your favourite pet category</p>

      <div className="category-grid">

        {pets.map((pet, index) => (
          <div className="category-card" key={index}>

            <img src={pet.image} alt={pet.name} />

            <h3>{pet.name}</h3>

            <button
              onClick={() =>
                navigate(`/adopt?category=${pet.name.toLowerCase()}`)
              }
            >
              View Pets
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Categories;