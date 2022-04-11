import React, { useState, useContext } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { ModalContext } from "../context/ModalContext";

const DropMenu = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const { modalToggle, setModalToggle } = useContext(ModalContext);
  const handleModalToggle = () => {
    setModalToggle(!modalToggle);
  };

  return (
    <>
      <Dropdown isOpen={toggle} toggle={handleToggle}>
        <DropdownToggle caret color="info" outline>
          <i className="fa fa-user mr-2" />
          Account
        </DropdownToggle>
        <DropdownMenu className="bg-info p-2" style={{ margin: 0 }}>
          <DropdownItem onClick={handleModalToggle} data-modal="modal-login">
            <i className="fa fa-sign-in mr-2" /> Login
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem
            onClick={handleModalToggle}
            data-modal="modal-register"
          >
            <i className="fa fa-user-plus mr-2" />
            Register
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
export default DropMenu;
