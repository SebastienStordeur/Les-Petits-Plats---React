import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/style.css";
import { RecipeContextProvider } from "./store/recipesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecipeContextProvider>
      <App />
    </RecipeContextProvider>
  </React.StrictMode>
);
