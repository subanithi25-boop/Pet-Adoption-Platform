import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const [adoptions, setAdoptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdoptions();
  }, []);

  const fetchAdoptions = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/adoptions",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setAdoptions(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const approveAdoption = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/adoptions/approve/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Adoption approved successfully!");
      fetchAdoptions();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectAdoption = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/adoptions/reject/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Adoption rejected!");
      fetchAdoptions();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard 🐾</h1>

      <h2>Adoption Requests</h2>

      {loading ? (
        <p>Loading...</p>
      ) : adoptions.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <div className="requests">
          {adoptions.map((item) => (
            <div
              className="request-card"
              key={item._id}
            >
              <h3>{item.name}</h3>

              <p>
                <strong>Pet:</strong>{" "}
                {item.pet?.name}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {item.email}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {item.phone}
              </p>

              <p>
                <strong>Address:</strong>{" "}
                {item.address}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {item.status}
              </p>

              {item.approvedAt && (
                <p>
                  <strong>Approved On:</strong>{" "}
                  {new Date(
                    item.approvedAt
                  ).toLocaleString()}
                </p>
              )}

              <div className="buttons">
                <button
                  onClick={() =>
                    approveAdoption(
                      item._id
                    )
                  }
                  disabled={
                    item.status ===
                    "Approved"
                  }
                >
                  Approve ✅
                </button>

                <button
                  onClick={() =>
                    rejectAdoption(
                      item._id
                    )
                  }
                  disabled={
                    item.status ===
                    "Rejected"
                  }
                >
                  Reject ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;