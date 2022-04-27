import React from "react";
import { useFetchData } from "../hooks/useFetchData";
import { Spinner } from "reactstrap";

const CheckDB = () => {
  const { data, loading } = useFetchData(
    "http://localhost:8080/api/neo4j_get_cities"
  );
  return (
    <div>
      {loading && <Spinner color="info"> </Spinner>}
      {!loading && (
        <div>
          <h4>CheckDB:</h4>
          <p>{JSON.stringify(data)}</p>
          {data.map((item, index) => (
            <p color="default" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
export default CheckDB;
