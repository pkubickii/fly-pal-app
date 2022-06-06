import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import DropMenu from "./components/DropMenu";
import logo from "./fplogo.svg";

const AppHeader = () => {
  return (
    <nav>
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo fly-pal" />
        </Link>
        <Link to="/">
          <div className="App-name">FlyPal</div>
        </Link>
        <Container>
          <Row className="row justify-content-end">
            <Col md="2">
              <DropMenu />
            </Col>
          </Row>
        </Container>
      </header>
    </nav>
  );
};
export default AppHeader;
