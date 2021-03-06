import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import TravelPicker from '../components/TravelPicker'
import CheckDB from '../components/CheckDB'
import JourneyTable from '../components/JourneyTable'
import MapView from '../components/MapView'
import { FlightsContext } from '../context/FlightsContext'
import { IndexContext } from '../context/IndexContext'
import { CitiesContext } from '../context/CitiesContext'
import axios from 'axios'
import { FactorContext } from '../context/FactorContext'

const AppHome = () => {
    const [index, setIndex] = useState(0)
    const [cities, setCities] = useState([])
    const [factor, setFactor] = useState('time')

    useEffect(() => {
        const getData = () => {
            axios
                .get('http://localhost:8080/api/neo4j_get_cities')
                .then((result) => {
                    setCities(result.data)
                    return result
                })
                .catch(console.log.bind(console))
        }
        getData()
    }, [])

    const [flights, setFlights] = useState([
        {
            names: ['Warsaw', 'Tokyo'],
            codes: ['WAW', 'TKO'],
            altCost: [1],
            cost: [1],
            path: [
                {
                    name: 'Warsaw',
                    lng: '21.01178',
                    iataCode: 'WAW',
                    lat: '52.22977',
                },
                {
                    name: 'Tokyo',
                    iataCode: 'NRT',
                    lng: '139.69171',
                    lat: '35.6895',
                },
            ],
        },
    ])

    return (
        <div className="bg-primary text-secondary">
            <FlightsContext.Provider value={{ flights, setFlights }}>
                <IndexContext.Provider value={{ index, setIndex }}>
                    <CitiesContext.Provider value={{ cities, setCities }}>
                        <FactorContext.Provider value={{ factor, setFactor }}>
                            <Row
                                className="pt-3 pb-2"
                                style={{ width: '100%' }}
                            >
                                <Col md="1"></Col>
                                <TravelPicker />
                                <Col md="6" className="ml-6">
                                    <JourneyTable />
                                </Col>
                            </Row>
                            <Row className="justify-content-center p-3">
                                <Col md="8">
                                    <Card className="bg-primary shadow mb-5">
                                        <CardBody>
                                            <MapView />
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="p-3">
                                <Col md="3">
                                    <CheckDB />
                                </Col>
                            </Row>
                        </FactorContext.Provider>
                    </CitiesContext.Provider>
                </IndexContext.Provider>
            </FlightsContext.Provider>
        </div>
    )
}
export default AppHome
