import "../styles/FeaturedPets.css";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";

function FeaturedPets(){

const pets=[

{
name:"Buddy",
breed:"Golden Retriever",
age:"2 Years",
location:"Chennai",
image:"https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=80"
},

{
name:"Luna",
breed:"Persian Cat",
age:"1 Year",
location:"Bangalore",
image:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=700&q=80"
},

{
name:"Charlie",
breed:"Beagle",
age:"3 Years",
location:"Hyderabad",
image:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=700&q=80"
}

];

return(

<section className="featured">

<h2 className="section-title">

Featured Pets

</h2>

<p className="section-subtitle">

Meet pets waiting for their forever home.

</p>

<div className="pet-grid">

{pets.map((pet,index)=>(

<div className="pet-card" key={index}>

<div className="pet-image">

<img
src={pet.image}
alt={pet.name}
/>

<button className="heart">

<FaHeart/>

</button>

</div>

<div className="pet-content">

<h3>{pet.name}</h3>

<h4>{pet.breed}</h4>

<p>{pet.age}</p>

<p>

<FaMapMarkerAlt/>

{" "}

{pet.location}

</p>

<button>

Adopt Me

</button>

</div>

</div>

))}

</div>

</section>

)

}

export default FeaturedPets;