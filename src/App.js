import React, { useState } from "react";
import "./App.css";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import { ModalContext } from "./components/ModalContext";
import AppHome from "./views/AppHome";
import ModalLogin from "./views/ModalLogin";

const App = () => {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <>
        <ModalContext.Provider value={{ modalToggle, setModalToggle }}>
          <AppHeader />
          <AppHome />
          <AppFooter />
          <ModalLogin />
        </ModalContext.Provider>
    </>
  );
};
export default App;
