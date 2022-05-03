import React, { useState } from "react";
import { InputGroup, InputGroupText, Input } from "reactstrap";
import PropTypes from "prop-types";
import { Card, CardBody } from "reactstrap";
import {useField} from 'formik';

const SearchBar = ({data: citiesData, ...props}) => {
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

  return (
    <>
      <InputGroup className="input-group-alternative">
        <InputGroupText>
          <i className="fa fa-map-marker" />
        </InputGroupText>
        <Input
          {... field}
          {...props}
          onChange={handleFilter}
        />
      </InputGroup>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div> 
        ) : null
      }

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
    </>
  );
};

SearchBar.propTypes = {
  field: PropTypes.array,
  props: PropTypes.array,
  data: PropTypes.array,
};
export default SearchBar;
