import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useContext } from 'react'
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
import SearchBar from './SearchBar'
import { CitiesContext } from '../context/CitiesContext'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const AddFlight = () => {
    const { cities } = useContext(CitiesContext)

    const initialValues = {
        startCity: '',
        endCity: '',
        distance: '',
        time: '',
        cost: '',
    }

    const validationSchema = yup.object({
        startCity: yup
            .string()
            .required('Pick up start city!')
            .oneOf(
                cities.map((city) => city.name),
                'Only listed cities!'
            ),
        endCity: yup
            .string()
            .required('Pick up final city!')
            .oneOf(
                cities.map((city) => city.name),
                'Only listed cities!'
            ),
        distance: yup.string().required('Distance required!'),
        time: yup.string().required('Time required!'),
        cost: yup.string().required('Cost required!'),
    })

    const onSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true)
        await sleep(1000)

        axios
            .post('http://localhost:8080/api/neo4j_post_flight', values)
            .then((response) => {
                console.log('response', response.data)
                if (!response.data.error) {
                    console.log('Added flight with no errors.')
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
                                    <b className="display-4">Add flight</b>
                                </div>
                            </CardHeader>
                            <CardBody className="px-lg-5 py-lg-5">
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
                                            <Row>
                                                <Col className="lg-12">
                                                    <FormGroup>
                                                        <InputGroup className="input-group-alternative mb-3">
                                                            <InputGroupText>
                                                                <i className="fa fa-road" />
                                                            </InputGroupText>
                                                            <Field
                                                                name="distance"
                                                                type="text"
                                                                placeholder="distance"
                                                                as={Input}
                                                            />
                                                            <ErrorMessage name="distance">
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
                                                                <i className="fa fa-clock-o" />
                                                            </InputGroupText>
                                                            <Field
                                                                name="time"
                                                                type="text"
                                                                placeholder="time"
                                                                as={Input}
                                                            />
                                                            <ErrorMessage name="time">
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
                                                                <i className="fa fa-usd" />
                                                            </InputGroupText>
                                                            <Field
                                                                name="cost"
                                                                type="text"
                                                                placeholder="cost"
                                                                as={Input}
                                                            />
                                                            <ErrorMessage name="cost">
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
                                                    Add flight
                                                    <i className="fa fa-paper-plane-o ml-1"></i>
                                                </Button>
                                            </div>
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
export default AddFlight
