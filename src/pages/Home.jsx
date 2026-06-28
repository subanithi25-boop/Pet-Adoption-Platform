import "../styles/Home.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Categories from "../components/Categories";
import WhyChoose from "../components/WhyChoose";
import FeaturedPets from "../components/FeaturedPets";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Statistics />
      <Categories />
      <WhyChoose />
      <FeaturedPets />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;