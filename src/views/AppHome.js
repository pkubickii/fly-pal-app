import React from "react";
import { useFetchData } from "../hooks/useFetchData";

const AppHome = () => {
  const { data, loading } = useFetchData(
    "http://localhost:8080/api/neo4j_get_cities"
  );

  return (
    <>
      <div className="App-page text-secondary display-5">
        {loading && <div>Loading...</div>}
        {!loading && (
          <div>
            <h4></h4>
            <p>{JSON.stringify(data.result)}</p>
            {data.result.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default AppHome;
