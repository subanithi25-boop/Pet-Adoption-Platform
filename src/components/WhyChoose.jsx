import "../styles/WhyChoose.css";
import {
  FaShieldAlt,
  FaHeartbeat,
  FaHandsHelping,
  FaUserMd
} from "react-icons/fa";

function WhyChoose() {

const features=[

{
icon:<FaShieldAlt/>,
title:"Safe Adoption",
text:"Every pet is verified before adoption."
},

{
icon:<FaHeartbeat/>,
title:"Healthy Pets",
text:"Vaccinated and medically checked pets."
},

{
icon:<FaHandsHelping/>,
title:"Easy Process",
text:"Simple and transparent adoption."
},

{
icon:<FaUserMd/>,
title:"24/7 Support",
text:"We help before and after adoption."
}

];

return(

<section className="why">

<h2 className="section-title">
Why Choose PetCare?
</h2>

<p className="section-subtitle">
Find your perfect companion with confidence.
</p>

<div className="why-grid">

{features.map((item,index)=>(

<div className="why-card" key={index}>

<div className="why-icon">
{item.icon}
</div>

<h3>{item.title}</h3>

<p>{item.text}</p>

</div>

))}

</div>

</section>

)

}

export default WhyChoose;