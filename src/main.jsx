// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App.jsx";

// import { FavoritesProvider }
// from "./context/FavoritesContext";

// import "./index.css";
// import "./styles/PetCard.css";
// import "./styles/PetDetails.css";
// import "./styles/Auth.css";
// import "./styles/Dashboard.css";
// import "./styles/Favorites.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <FavoritesProvider>
//       <App />
//     </FavoritesProvider>
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { FavoritesProvider } from "./context/FavoritesContext";

import "./index.css";
import "./styles/PetCard.css";
import "./styles/PetDetails.css";
import "./styles/Auth.css";
import "./styles/Dashboard.css";
import "./styles/Favorites.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </StrictMode>
);