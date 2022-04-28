import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import TravelPicker from "../components/TravelPicker";
import CheckDB from "../components/CheckDB";
import JourneyTable from "../components/JourneyTable";
import MapView from "../components/MapView";
import { FlightsContext } from "../context/FlightsContext";
import {IndexContext} from "../context/IndexContext";

const AppHome = () => {

  const [index, setIndex] = useState(0);

  const [flights, setFlights] = useState([

    {
      names: ["Warsaw", "Tokyo"],
      cost: 900,
      path: [
        {
          name: "Warsaw",
          country: "PL",
          lng: "21.01178",
          lat: "52.22977",
        },
        {
          name: "Tokyo",
          country: "JP",
          lng: "139.69171",
          lat: "35.6895",
        },
      ],
    },
  ]);

  return (
    <>
      <FlightsContext.Provider value={{ flights, setFlights }}>
        <IndexContext.Provider value={{ index, setIndex }}>
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
        </IndexContext.Provider>
      </FlightsContext.Provider>
    </>
  );
};
export default AppHome;
