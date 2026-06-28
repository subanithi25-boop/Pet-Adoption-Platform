
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import PetDetails from "./pages/PetDetails";
import Favorites from "./pages/Favorites";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdoptionForm from "./pages/AdoptionForm";
import AdminDashboard from "./pages/AdminDashboard";
import AddPet from "./pages/AddPet";
import Contact from "./pages/Contact";
import Success from "./pages/Success";

import AccessDenied from "./pages/AccessDenied";
import AdminRoute from "./components/AdminRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/pet/:id" element={<PetDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adopt-form" element={<AdoptionForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
  

        {/* 🚫 Access Denied */}
        <Route path="/access-denied" element={<AccessDenied />} />

        {/* 🔐 ADMIN ONLY ROUTES */}

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/add-pet"
          element={
            <AdminRoute>
              <AddPet />
            </AdminRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
