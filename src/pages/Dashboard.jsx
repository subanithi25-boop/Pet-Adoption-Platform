import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css";
import { motion } from "framer-motion";

function Dashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchAdoptions();
  }, []);

  const fetchAdoptions = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
  "https://pet-adoption-platform-1-aa5h.onrender.com/api/adoptions/my",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRequests(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const total = requests.length;

  const pending = requests.filter(
    (r) => !r.status || r.status === "Pending"
  ).length;

  const approved = requests.filter(
    (r) => r.status === "Approved"
  ).length;

  const rejected = requests.filter(
    (r) => r.status === "Rejected"
  ).length;

  return (
    <div className="dashboard-page">
      <motion.h1 className="title">
        🧑‍💼 Adoption Dashboard
      </motion.h1>

      {/* STATS */}
      <div className="stats-container">
        <div className="stat-card total">
          <h3>{total}</h3>
          <p>Total</p>
        </div>

        <div className="stat-card pending">
          <h3>{pending}</h3>
          <p>Pending</p>
        </div>

        <div className="stat-card approved">
          <h3>{approved}</h3>
          <p>Approved</p>
        </div>

        <div className="stat-card rejected">
          <h3>{rejected}</h3>
          <p>Rejected</p>
        </div>
      </div>

      {requests.length === 0 ? (
        <div className="empty-card">
          <h2>No adoption requests yet 🐾</h2>
        </div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Pet</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((req) => (
                <tr key={req._id}>
                  <td>{req.name}</td>
                  <td>{req.email}</td>
                  <td>{req.pet?.name}</td>
                  <td>{req.phone}</td>

                  <td>
                    <span
                      className={`status ${req.status?.toLowerCase()}`}
                    >
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Dashboard;