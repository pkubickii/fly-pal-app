import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import './index.css';
import App from "./App";
import Login from "./views/Login";
import LoginModal from "./views/LoginModal";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <Routes>
      <Route path="/login" caseSensitive={false} element={<div className="w-auto p-5"><Login/></div>} />
      <Route path="/register" caseSensitive={false} element={<LoginModal />} />
      <Route path="/" caseSensitive={false} element={<App />} />
    </Routes>
  </Router>
);
