import React, { useState, useContext } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ModalLogin from "../views/ModalLogin";
import { ModalContext } from "./ModalContext";

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
        <DropdownMenu className="bg-info p-2">
          <DropdownItem onClick={handleModalToggle}>
            <i className="fa fa-sign-in mr-2" /> Login
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem
            onClick={() => {
              alert("Register"), console.log("TODO: Register");
            }}
          >
            <i className="fa fa-user-plus mr-2" />
            Register
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <ModalLogin />
    </>
  );
};
export default DropMenu;
