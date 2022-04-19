import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
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
          <Form role="form">
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupText>
                  <i className="fa fa-map-marker" />
                </InputGroupText>
                <Input placeholder="From" className="p-3" />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-4">
              <InputGroup className="input-group-alternative">
                <InputGroupText>
                  <i className="fa fa-map-marker" />
                </InputGroupText>
                <Input placeholder="To" className="p-3" />
              </InputGroup>
            </FormGroup>
            <div className="text-center">
              <Button color="success" type="submit">
                Search
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};
export default TravelPicker;
