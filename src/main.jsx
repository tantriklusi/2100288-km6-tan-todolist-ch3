import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ColorPickerApp from "./ColorPickerApp.jsx";
import CounterApp from "./CounterApp.jsx";
import ShoppingListApp from "./ShoppingListApp.jsx";
import ProjectCheckList from "./ProjectCheckList.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectCheckList />
  </React.StrictMode>
);
