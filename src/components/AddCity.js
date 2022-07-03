import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import {
    Container,
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    InputGroup,
    InputGroupText,
    Row,
    Col,
    Input,
} from 'reactstrap'
import * as yup from 'yup'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const AddCity = () => {
    const initialValues = {
        iataCode: '',
        name: '',
        lat: '',
        lng: '',
    }

    const validationSchema = yup.object({
        iataCode: yup
            .string()
            .length(3, 'IATA code must be 3 characters!')
            .required('Missing iata code!'),
        name: yup.string().required('Missing city name!'),
        lat: yup
            .string()
            .matches(
                /^(\+|-)?(?:90(?:(?:\.0+)?)|(?:[0-9]|[1-8][0-9])(?:(?:\.\d+)?))$/,
                'Bad latitude format!'
            )
            .required('Missing latitude!'),
        lng: yup
            .string()
            .matches(
                /^(\+|-)?(?:180(?:(?:\.0+)?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.\d+)?))$/,
                'Bad longitude format!'
            )
            .required('Missing longitude!'),
    })

    const onSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true)
        await sleep(1000)

        axios
            .post('http://localhost:8080/api/neo4j_post_city', values)
            .then((response) => {
                console.log('response', response.data)
                if (!response.data.error) {
                    console.log('Added city with no errors.')
                } else {
                    console.log('Error:', response.data.error)
                }
            })
            .catch((error) => {
                console.log('error', error)
            })
        setSubmitting(false)
    }

    return (
        <div className="bg-primary pb-3">
            <Container className="py-lg-3 bg-info card">
                <Row className="justify-content-center">
                    <Col lg="12">
                        <Card className="bg-secondary shadow border-0">
                            <CardHeader className="bg-white pb-5">
                                <div className="text-muted text-center mb-3">
                                    <b className="display-4">Add city</b>
                                </div>
                            </CardHeader>
                            <CardBody className="px-lg-5 py-lg-5">
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={onSubmit}
                                    validationSchema={validationSchema}
                                >
                                    {({ isSubmitting, values, errors }) => (
                                        <Form>
                                            <Row>
                                                <Col className="lg-12">
                                                    <FormGroup>
                                                        <InputGroup className="input-group-alternative mb-3">
                                                            <InputGroupText>
                                                                <i className="fa fa-plane" />
                                                            </InputGroupText>
                                                            <Field
                                                                name="iataCode"
                                                                type="text"
                                                                placeholder="IATA CODE"
                                                                as={Input}
                                                            />
                                                            <ErrorMessage name="iataCode">
                                                                {(msg) => (
                                                                    <div
                                                                        style={{
                                                                            color: 'red',
                                                                        }}
                                                                    >
                                                                        {msg}
                                                                    </div>
                                                                )}
                                                            </ErrorMessage>
                                                        </InputGroup>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <InputGroup className="input-group-alternative mb-3">
                                                            <InputGroupText>
                                                                <i className="fa fa-globe" />
                                                            </InputGroupText>
                                                            <Field
                                                                name="name"
                                                                type="text"
                                                                placeholder="city name"
                                                                as={Input}
                                                            />
                                                            <ErrorMessage name="name">
                                                                {(msg) => (
                                                                    <div
                                                                        style={{
                                                                            color: 'red',
                                                                        }}
                                                                    >
                                                                        {msg}
                                                                    </div>
                                                                )}
                                                            </ErrorMessage>
                                                        </InputGroup>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <InputGroup className="input-group-alternative mb-3">
                                                            <InputGroupText>
                                                                <i className="fa fa-location-arrow" />
                                                            </InputGroupText>
                                                            <Field
                                                                name="lat"
                                                                type="text"
                                                                placeholder="latitude"
                                                                as={Input}
                                                            />
                                                            <ErrorMessage name="lat">
                                                                {(msg) => (
                                                                    <div
                                                                        style={{
                                                                            color: 'red',
                                                                        }}
                                                                    >
                                                                        {msg}
                                                                    </div>
                                                                )}
                                                            </ErrorMessage>
                                                        </InputGroup>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <InputGroup className="input-group-alternative mb-3">
                                                            <InputGroupText>
                                                                <i className="fa fa-location-arrow" />
                                                            </InputGroupText>
                                                            <Field
                                                                name="lng"
                                                                type="text"
                                                                placeholder="longitude"
                                                                as={Input}
                                                            />
                                                            <ErrorMessage name="lng">
                                                                {(msg) => (
                                                                    <div
                                                                        style={{
                                                                            color: 'red',
                                                                        }}
                                                                    >
                                                                        {msg}
                                                                    </div>
                                                                )}
                                                            </ErrorMessage>
                                                        </InputGroup>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <div className="text-center">
                                                <Button
                                                    className="px-5 my-2"
                                                    disabled={isSubmitting}
                                                    color="success"
                                                    type="submit"
                                                >
                                                    Add city
                                                    <i className="fa fa-paper-plane-o ml-1"></i>
                                                </Button>
                                            </div>
                                            <pre>
                                                {JSON.stringify(
                                                    values,
                                                    null,
                                                    2
                                                )}
                                            </pre>
                                            <pre>
                                                {JSON.stringify(
                                                    errors,
                                                    null,
                                                    2
                                                )}
                                            </pre>
                                        </Form>
                                    )}
                                </Formik>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AddCity
