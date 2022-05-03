import axios from "axios";
import { Formik, Form } from "formik";
import React, { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Row,
  Col,
} from "reactstrap";
import { FlightsContext } from "../context/FlightsContext";
import SearchBar from "./SearchBar";
import { CitiesContext } from "../context/CitiesContext";
import * as yup from "yup";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const TravelPicker = () => {
  const { setFlights } = useContext(FlightsContext);
  const { cities } = useContext(CitiesContext);

  const initialValues = {
    startCity: "",
    endCity: "",
  };

  const validationSchema = yup.object({
    startCity: yup
      .string()
      .required("Pick up start city!")
      .oneOf(
        cities.map((city) => city.name),
        "Only listed cities!"
      ),
    endCity: yup
      .string()
      .required("Pick up final city!")
      .oneOf(
        cities.map((city) => city.name),
        "Only listed cities!"
      ),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    await sleep(1000);
    axios
      .get(
        `http://localhost:8080/api/neo4j_get_flight/${values.startCity}-${values.endCity}`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.length == 0) {
          throw new Error("Response array is empty!");
        }
        setFlights(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setSubmitting(false);
  };

  return (
    <>
      <Card className="bg-primary shadow p-lg-3 mb-3">
        <CardTitle className="pt-1 pb-3 pl-2 m-0 h3 bg-primary font-weight-bold text-light">
          Travel Picker
        </CardTitle>
        <CardBody className="px-2 py-1">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <Row>
                  <Col className="lg-6">
                    <FormGroup className="mb-4">
                      <SearchBar
                        placeholder="Choose start city..."
                        name="startCity"
                        data={cities}
                        className="p-3"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="lg-6">
                    <FormGroup className="mb-4">
                      <SearchBar
                        placeholder="Choose final city..."
                        name="endCity"
                        data={cities}
                        className="p-3"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <div className="text-center">
                  <Button
                    className="px-5"
                    disabled={isSubmitting}
                    color="success"
                    type="submit"
                  >
                    GO <i className="fa fa-plane ml-1"></i>
                  </Button>
                </div>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </>
  );
};
export default TravelPicker;
