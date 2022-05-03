import axios from "axios";
import { Formik, Form } from "formik";
import React, { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
} from "reactstrap";
import { FlightsContext } from "../context/FlightsContext";
import SearchBar from "./SearchBar";
import { CitiesContext } from "../context/CitiesContext";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const TravelPicker = () => {
  const { setFlights } = useContext(FlightsContext);
  const {cities} = useContext(CitiesContext);
  return (
    <>
      <Card className="bg-primary shadow">
        <CardTitle className="p-2 h3 bg-primary">Travel Picker</CardTitle>
        <CardBody className="px-lg-4 py-lg-4">
          <Formik
            initialValues={{ startCity: "", endCity: "" }}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              await sleep(1000);
              axios
                .get(
                  `http://localhost:8080/api/neo4j_get_flight/${values.startCity}-${values.endCity}`
                )
                .then((response) => {
                  console.log(response.data);
                  // alert(JSON.stringify(response.data, null, 2));
                  setFlights(response.data);
                })
                .catch((error) => {
                  console.log(error);
                });
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormGroup className="mb-3">
                    <SearchBar
                      placeholder="Choose start city..."
                      name="startCity"
                      data={cities}
                      className="p-3"
                    />
                </FormGroup>
                <FormGroup className="mb-4">
                    <SearchBar
                      placeholder="Choose final city..."
                      name="endCity"
                      data={cities}
                      className="p-3"
                    />
                </FormGroup>
                <div className="text-center">
                  <Button disabled={isSubmitting} color="success" type="submit">
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
