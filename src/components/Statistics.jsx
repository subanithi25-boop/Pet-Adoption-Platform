import "../styles/Statistics.css";
import { FaPaw, FaHome, FaHeart, FaShieldAlt } from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaPaw />,
      number: "1500+",
      title: "Pets Adopted"
    },
    {
      icon: <FaHome />,
      number: "250+",
      title: "Shelters"
    },
    {
      icon: <FaHeart />,
      number: "5000+",
      title: "Happy Families"
    },
    {
      icon: <FaShieldAlt />,
      number: "100%",
      title: "Verified Pets"
    }
  ];

  return (
    <section className="statistics">

      {stats.map((item, index) => (

        <div className="stat-card" key={index}>

          <div className="stat-icon">
            {item.icon}
          </div>

          <h2>{item.number}</h2>

          <p>{item.title}</p>

        </div>

      ))}

    </section>
  );
}

export default Statistics;