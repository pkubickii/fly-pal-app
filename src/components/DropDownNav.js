import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropDownNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="info" outline>
          Menu
        </DropdownToggle>
        <DropdownMenu dark="true" color="info" >
          {/* <DropdownItem header>Header</DropdownItem> */}
          {/* <DropdownItem disabled>Action</DropdownItem> */}
          <DropdownItem>Login</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Register</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}