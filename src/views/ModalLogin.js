import React, { useContext } from "react";
import { Modal } from "reactstrap";
import { ModalContext } from "../components/ModalContext";
import Login from "./Login";

const ModalLogin = () => {
  const { modalToggle, setModalToggle } = useContext(ModalContext);
  const handleModalToggle = () => {
    setModalToggle(!modalToggle);
  };
  return (
    <>
      <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={modalToggle}
        toggle={handleModalToggle}
      >
        <Login />
      </Modal>
    </>
  );
};
export default ModalLogin;
