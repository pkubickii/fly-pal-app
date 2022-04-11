import React from "react";
import { useFetchData } from "../hooks/useFetchData";

const AppHome = () => {
  const { data, loading } = useFetchData("http://localhost:8008/cities");

  return (
    <>
      <div className="App-page text-secondary display-4">
        {loading && <div>Loading...</div>}
        {!loading && (
          <div>
            <ul>
              {data.map((city) => (
                <li key={city.id}>{city.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default AppHome;
