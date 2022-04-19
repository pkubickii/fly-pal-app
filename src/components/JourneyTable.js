import React from "react";
import { Table } from "reactstrap";

const JourneyTable = () => {
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
        <tr scope="row">
          <td>1</td>
          <td>Warsaw - New York City</td>
          <td>9h 30min</td>
          <td>Non Stop</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default JourneyTable;
