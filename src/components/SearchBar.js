import React, { useState } from "react";
import { InputGroup, InputGroupText, Input } from "reactstrap";
import PropTypes from "prop-types";
import { Card, CardBody } from "reactstrap";

const SearchBar = ({ placeholder, name, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const handleSearchResult = (event) => {
    setWordEntered(event.target.innerText);
    console.log(event.target.innerText);
    setFilteredData([]);
  };
  return (
    <>
      <InputGroup className="input-group-alternative">
        <InputGroupText>
          <i className="fa fa-map-marker" />
        </InputGroupText>
        <Input
          placeholder={placeholder}
          className="p-3"
          name={name}
          value={wordEntered}
          onChange={handleFilter}
        />
      </InputGroup>

      {filteredData.length != 0 && (
        <div className="searchResult">
          {filteredData.slice(0, 15).map((value, index) => {
            return (
              <Card key={index} className="bg-default shadow">
                <CardBody className="p-1 m-0 ">
                  <p
                    onClick={handleSearchResult}
                    style={{ cursor: "pointer" }}
                    className="mb-0 px-2"
                  >
                    <strong>{value.name}</strong>
                  </p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};
SearchBar.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  data: PropTypes.array,
};
export default SearchBar;
