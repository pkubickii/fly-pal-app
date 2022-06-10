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

axios.defaults.withCredentials = true;
const LoginCard = () => {
  const { username, setUsername, email, setEmail } = useContext(UserContext);
  const { setModalToggle } = useContext(ModalContext);

  const initialValues = {
    email,
    passwd: "",
  };

  let navigate = useNavigate();

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    axios
      .post("http://localhost:8080/api/login", values)
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
    email: yup.string().required("Enter email!"),
    passwd: yup.string().required("Enter password!"),
  });

  useEffect(() => {
    console.log("username:", username);
    console.log("email:", email);
  }, [username, email]);

  return (
    <div className="bg-primary">
      <Container className="pt-lg-3 pb-lg-2 bg-info card">
        <Row className="justify-content-center">
          <Col lg="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white pb-5">
                <div className="text-muted text-center mb-3">
                  <small>Sign in with</small>
                </div>
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
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
                  <small>Or sign in with credentials</small>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
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
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin"
                      >
                        <span>Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="submit">
                        Sign in
                      </Button>
                    </div>
                  </Form>
                </Formik>
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="6">
                <a
                  className="text-white"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <small>Forgot password?</small>
                </a>
              </Col>
              <Col className="text-right" xs="6">
                <a
                  className="text-white"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <small>Create new account</small>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default LoginCard;
