import { useNavigate } from "react-router-dom";
import "../styles/AccessDenied.css";

function AccessDenied() {
  const navigate = useNavigate();

  return (
    <div className="access-page">
      <div className="access-card">
        <h1>🚫 Access Denied</h1>
        <p>You are not allowed to access this page.</p>

        <button onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
}

export default AccessDenied;