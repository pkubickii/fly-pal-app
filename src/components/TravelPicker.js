import { Formik, Field, Form } from "formik";
import React from "react";
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

const TravelPicker = () => {
  return (
    <>
      <Card className="bg-primary shadow">
        <CardTitle className="p-2 h3 bg-primary">Travel Picker</CardTitle>
        <CardBody className="px-lg-4 py-lg-4">
          <Formik
            initialValues={{ startCity: "", endCity: "" }}
            onSubmit={(data) => {
              console.log(data);
              alert(JSON.stringify(data, null, 2));
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
