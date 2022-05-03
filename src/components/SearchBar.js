import React, { useState } from "react";
import {
  InputGroup,
  InputGroupText,
  Input,
  Card,
  CardBody,
  Alert,
} from "reactstrap";
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
    helpers.setTouched(false);
  };

  return (
    <div className="searchBar">
      <div className="paddingDiv">
        {meta.touched && meta.error ? (
          <Alert className="py-1 my-0" color="warning">
            <span className="alert-inner--icon">
              <i className="fa fa-info-circle" />
            </span>
            <span className="alert-outer--text">
              <strong>{meta.error}</strong>
            </span>
          </Alert>
        ) : null}
      </div>
      <InputGroup className="input-group-alternative">
        <InputGroupText>
          <i className="fa fa-map-marker text-blue" />
        </InputGroupText>
        <Input
          {...field}
          {...props}
          onChange={handleFilter}
          autoComplete="off"
          className="font-weight-bold"
        />
        <InputGroupText>
          {field.value != "" ? (
            <i
              className="fa fa-times text-danger inputIconMinWidth"
              onClick={clearInput}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <i className="fa fa-search text-success inputIconMinWidth" />
          )}
        </InputGroupText>
      </InputGroup>

      {filteredData.length != 0 && (
        <div className="searchResult">
          {filteredData.slice(0, 15).map((val, index) => {
            return (
              <Card key={index} className="bg-default shadow m-0 pr-0">
                <CardBody className="pl-2 py-1">
                  <p
                    onClick={handleSearchResult}
                    style={{ cursor: "pointer" }}
                    className="mb-0 pl-2 pr-0"
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
