import React, { useState } from "react";
import "./App.css";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import { ModalContext } from "./context/ModalContext";
import AppHome from "./views/AppHome";
import ModalWrapper from "./components/ModalWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginCard from "./views/LoginCard";
import RegisterCard from "./views/RegisterCard";
import Map from "./views/Map";

const App = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [modalType, setModalType] = useState("");
  const checkModalType = (event) => {
    const {
      target: {
        dataset: { modal },
      },
    } = event;
    if (modal) setModalType(modal);
  };

  return (
    <>
      <Router>
        <div onClick={checkModalType} className="bg-primary text-secondary">
          <ModalContext.Provider value={{ modalToggle, setModalToggle }}>
            <AppHeader />
            <Routes>
              <Route path="/" element={<AppHome />} />
              <Route path="/login" element={<LoginCard />} />
              <Route path="/register" element={<RegisterCard />} />
              <Route path="/map" element={<Map />} />
            </Routes>
            <ModalWrapper modalType={modalType} />
            <AppFooter />
          </ModalContext.Provider>
        </div>
      </Router>
    </>
  );
};
export default App;
