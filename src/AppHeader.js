import React from "react";
import { Container, Row, Col } from "reactstrap";
import DropMenu from "./components/DropMenu";
import logo from "./fplogo.svg";

const AppHeader = () => {
  return (
    <nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo fly-pal" />
        <div className="App-name">FlyPal</div>
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
