import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import TravelPicker from "../components/TravelPicker";
import CheckDB from "../components/CheckDB";
import JourneyTable from "../components/JourneyTable";
import MapView from "../components/MapView";
import { CitiesContext } from "../context/CitiesContext";

const AppHome = () => {
  const [cities, setCities] = useState([
    [52.22977, 21.01178],
    [40.71427, -74.00597],
  ]);
  return (
    <>
      <CitiesContext.Provider value={{ cities, setCities }}>
        <Row className="mt-3 mb-5 pt-5 pb-5" style={{ width: "100%" }}>
          <Col md="2"></Col>
          <TravelPicker />
          <Col md="6" className="ml-6">
            <JourneyTable />
          </Col>
        </Row>
        <Row className="m-3">
          <Col md="2"></Col>
          <Col md="8">
            <Card className="bg-primary shadow">
              <CardBody>
                <MapView />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="m-3">
          <Col md="3">
            <CheckDB />
          </Col>
        </Row>
      </CitiesContext.Provider>
    </>
  );
};
export default AppHome;
