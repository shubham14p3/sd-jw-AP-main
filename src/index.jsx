import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-all.min.css";
import "./assets/css/lightBox.css";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import "react-daypicker/lib/DayPicker.css";
import Router from "./Router";

// Import your main.js script if it contains important functionality
// import "./assets/js/main.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);
