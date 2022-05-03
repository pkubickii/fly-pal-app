import React, { useState } from "react";
import { InputGroup, InputGroupText, Input, Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import { useField } from "formik";

const SearchBar = ({ data: citiesData, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    helpers.setValue(searchWord);

    const newFilter = citiesData.filter((city) => {
      return city.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleSearchResult = (event) => {
    console.log(event.target.innerText);
    helpers.setValue(event.target.innerText);
    setFilteredData([]);
  };

  const clearInput = () => {
    setFilteredData([]);
    helpers.setValue("");
  };

  return (
    <div className="searchBar">
      <InputGroup className="input-group-alternative">
        <InputGroupText>
          <i className="fa fa-map-marker text-blue" />
        </InputGroupText>
        <Input
          {...field}
          {...props}
          onChange={handleFilter}
          autoComplete="off"
        />
        <InputGroupText>
          {field.value != "" ? (
            <i
              className="fa fa-times text-danger"
              onClick={clearInput}
              style={{ cursor: "pointer" }}
            ></i>
          ) : (
            <i className="fa fa-search text-success"></i>
          )}
        </InputGroupText>
      </InputGroup>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}

      {filteredData.length != 0 && (
        <div className="searchResult">
          {filteredData.slice(0, 15).map((val, index) => {
            return (
              <Card key={index} className="bg-default shadow">
                <CardBody className="p-1 m-0 ">
                  <p
                    onClick={handleSearchResult}
                    style={{ cursor: "pointer" }}
                    className="mb-0 px-2"
                  >
                    <strong>{val.name}</strong>
                  </p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  field: PropTypes.array,
  props: PropTypes.array,
  data: PropTypes.array,
};
export default SearchBar;
