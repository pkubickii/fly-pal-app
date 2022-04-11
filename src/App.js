import React, { useState } from "react";
import "./App.css";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import { ModalContext } from "./context/ModalContext";
import AppHome from "./views/AppHome";
import ModalWrapper from "./components/ModalWrapper";

const App = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [modalType, setModalType] = useState("");
  const checkModalType = (event) => {
    // event.preventDefault();
    const {
      target: {
        dataset: { modal },
      },
    } = event;
    if (modal) setModalType(modal);
  };

  return (
    <>
      <div onClick={checkModalType}>
        <ModalContext.Provider value={{ modalToggle, setModalToggle }}>
          <AppHeader />
          <AppHome />
          <ModalWrapper modalType={modalType} />
          <AppFooter />
        </ModalContext.Provider>
      </div>
    </>
  );
};
export default App;
