import React, { useContext } from "react";
import { Table } from "reactstrap";
import { FlightsContext } from "../context/FlightsContext";

const JourneyTable = () => {
  const { flights } = useContext(FlightsContext);
  console.log(flights);
  return (
    <Table hover className="text-secondary">
      <thead>
        <tr>
          <th>#</th>
          <th>Journey</th>
          <th>Duration</th>
          <th>Stops</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight, index) => (
          <tr scope="row" key={index}>
            <td>{index}</td>
            <td>{flight.names.map((name) => name + " ")}</td>
            <td>{flight.cost}</td>
            <td>{flight.names.length - 2}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default JourneyTable;
