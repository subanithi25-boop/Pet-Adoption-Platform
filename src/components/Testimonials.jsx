import "../styles/Testimonials.css";

function Testimonials() {

const reviews=[

{
name:"Sarah Johnson",
image:"https://randomuser.me/api/portraits/women/44.jpg",
review:"PetCare made the adoption process incredibly easy. Buddy has become part of our family!"
},

{
name:"Michael David",
image:"https://randomuser.me/api/portraits/men/32.jpg",
review:"Amazing experience. The staff guided us through every step and helped us find the perfect pet."
},

{
name:"Emily Wilson",
image:"https://randomuser.me/api/portraits/women/68.jpg",
review:"Highly recommended! We adopted Luna and couldn't be happier."
}

];

return(

<section className="testimonials">

<h2 className="section-title">
Happy Families
</h2>

<p className="section-subtitle">
Real stories from pet lovers.
</p>

<div className="testimonial-grid">

{reviews.map((item,index)=>(

<div className="testimonial-card" key={index}>

<img
src={item.image}
alt={item.name}
/>

<h3>{item.name}</h3>

<div className="stars">
★★★★★
</div>

<p>{item.review}</p>

</div>

))}

</div>

</section>

)

}

export default Testimonials;