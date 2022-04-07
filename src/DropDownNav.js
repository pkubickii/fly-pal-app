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
        <DropdownToggle caret>
          Menu
        </DropdownToggle>
        <DropdownMenu dark>
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