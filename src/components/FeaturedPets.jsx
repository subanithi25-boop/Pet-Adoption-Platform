import pets from "../data/pets";
import PetCard from "./PetCard";

function FeaturedPets() {
  return (
    <section className="featured-pets">

      <div className="section-title">
        <h2>Featured Pets</h2>
        <p>
          Meet our adorable pets waiting for a loving home.
        </p>
      </div>

      <div className="pets-grid">

        {pets.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedPets;