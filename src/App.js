import logo from "./fplogo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import DropDownNav from "./components/DropDownNav";
import Login from "./views/Login";
import LoginModal from "./views/LoginModal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-name">FlyPal</div>
        <Container>
          <Row xs="12">
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <DropDownNav />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="App-page">
          <Login />
      </div>
    </div>
  );
}

export default App;
