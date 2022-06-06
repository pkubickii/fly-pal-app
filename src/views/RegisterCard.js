import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import googlelogo from "../assets/img/icons/common/google.svg";
import githublogo from "../assets/img/icons/common/github.svg";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../context/ModalContext";

const RegisterCard = () => {
  const { username, setUsername, email, setEmail } = useContext(UserContext);
  const { setModalToggle } = useContext(ModalContext);

  const initialValues = {
    username,
    email,
    passwd: "",
  };

  let navigate = useNavigate();

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    axios
      .post("http://localhost:8080/api/register", values)
      .then((response) => {
        console.log("response", response.data);
        if (!response.data.error) {
          setUsername(response.data.name);
          setEmail(response.data.email);
          navigate("/profile");
          setModalToggle(false);
        } else {
          console.log("Error:", response.data.error);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const validationSchema = yup.object({
    username: yup.string().required("Enter username!"),
    email: yup.string().required("Enter email!"),
    passwd: yup.string().required("Enter password!"),
  });

  useEffect(() => {
    console.log("username:", username);
    console.log("email:", email);
  }, [username, email]);

  return (
    <div className="bg-primary">
      <Container className="py-lg-3 bg-info card">
        <Row className="justify-content-center">
          <Col lg="12">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-white pb-5">
                <div className="text-muted text-center mb-3">
                  <small>Sign up with</small>
                </div>
                <div className="text-center">
                  <Button
                    className="btn-neutral btn-icon mr-4"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img alt="github logo" src={githublogo} />
                    </span>
                    <span className="btn-inner--text">Github</span>
                  </Button>
                  <Button
                    className="btn-neutral btn-icon ml-1"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img alt="google logo" src={googlelogo} />
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign up with credentials</small>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                        <Field
                          name="username"
                          placeholder="User name"
                          type="text"
                          as={Input}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                        <Field
                          name="email"
                          placeholder="Email"
                          type="email"
                          as={Input}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                        <Field
                          name="passwd"
                          placeholder="Password"
                          type="password"
                          autoComplete="off"
                          as={Input}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="text-muted font-italic">
                      <small>
                        password strength:{" "}
                        <span className="text-success font-weight-700">
                          strong
                        </span>
                      </small>
                    </div>
                    <Row className="my-4">
                      <Col xs="12">
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheckRegister"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckRegister"
                          >
                            <span>
                              I agree with the{" "}
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Privacy Policy
                              </a>
                            </span>
                          </label>
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="submit">
                        Create account
                      </Button>
                    </div>
                  </Form>
                </Formik>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default RegisterCard;
