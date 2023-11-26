import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-all.min.css";
import "./assets/css/lightBox.css";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import "./assets/js/main.js";
import "react-daypicker/lib/DayPicker.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
