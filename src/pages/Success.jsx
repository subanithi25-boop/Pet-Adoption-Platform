
import { useNavigate } from "react-router-dom";
import "../styles/Success.css";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-card">

        <h1>🎉 Adoption Successful!</h1>

        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          alt="success"
          style={{ width: "120px" }}
        />

        <p>Your adoption request has been submitted successfully.</p>

        <button onClick={() => navigate("/adopt")}>
          Adopt More Pets 🐾
        </button>

      </div>
    </div>
  );
}

export default Success;