import React, { useState } from "react";
import { Modal, Button } from "reactstrap";
import Login from "./Login";

const LoginModal = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Button color="danger" className="w-25" onClick={handleToggle}>Modal</Button>
      <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={toggle}
        toggle={handleToggle}
      >
          <Login />
      </Modal>
    </>
  );
};
export default LoginModal;
