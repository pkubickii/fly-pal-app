import axios from "axios";
import { Formik, Field, Form } from "formik";
import React, { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { FlightsContext } from "../context/FlightsContext";

const TravelPicker = () => {
  const { setFlights } = useContext(FlightsContext);
  return (
    <>
      <Card className="bg-primary shadow">
        <CardTitle className="p-2 h3 bg-primary">Travel Picker</CardTitle>
        <CardBody className="px-lg-4 py-lg-4">
          <Formik
            initialValues={{ startCity: "", endCity: "" }}
            onSubmit={(values) => {
              axios
                .get(
                  "http://localhost:8080/api/neo4j_get_flight/" +
                    values.startCity +
                    "-" +
                    values.endCity
                )
                .then((response) => {
                  // console.log(response.data);
                  // alert(JSON.stringify(response.data, null, 2));
                  setFlights(response.data);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            {() => (
              <Form>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      <i className="fa fa-map-marker" />
                    </InputGroupText>
                    <Field
                      placeholder="From"
                      className="p-3"
                      name="startCity"
                      as={Input}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-4">
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      <i className="fa fa-map-marker" />
                    </InputGroupText>
                    <Field
                      placeholder="To"
                      className="p-3"
                      name="endCity"
                      as={Input}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button color="success" type="submit">
                    Search
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </>
  );
};
export default TravelPicker;
