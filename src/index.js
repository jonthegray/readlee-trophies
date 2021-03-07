import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Actions from "./flux/Actions.js";

// Get data initially into the Store on page load
Actions.initialize();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
