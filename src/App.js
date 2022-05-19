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
import { UserContext } from "./context/UserContext";
import Profile from "./views/Profile";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

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
        <div onClick={checkModalType}>
          <UserContext.Provider
            value={{
              username,
              setUsername,
              email,
              setEmail,
              passwd,
              setPasswd,
            }}
          >
            <ModalContext.Provider value={{ modalToggle, setModalToggle }}>
              <AppHeader />
              <Routes>
                <Route path="/" element={<AppHome />} />
                <Route path="/login" element={<LoginCard />} />
                <Route path="/register" element={<RegisterCard />} />
                <Route path="/map" element={<Map />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              <ModalWrapper modalType={modalType} />
              <AppFooter />
            </ModalContext.Provider>
          </UserContext.Provider>
        </div>
      </Router>
    </>
  );
};
export default App;
