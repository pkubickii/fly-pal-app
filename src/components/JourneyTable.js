import React, { useContext } from 'react'
import { Table } from 'reactstrap'
import { FlightsContext } from '../context/FlightsContext'
import { IndexContext } from '../context/IndexContext'

const JourneyTable = () => {
    const { flights } = useContext(FlightsContext)
    const { setIndex } = useContext(IndexContext)
    const handleIndex = (index) => {
        setIndex(index)
        // console.log("Index: " + index);
    }
    return (
        <Table hover className="text-secondary m-1">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Journey</th>
                    <th>Duration</th>
                    <th>Stops</th>
                </tr>
            </thead>
            <tbody>
                {flights.map((flight, index) => (
                    <tr
                        scope="row"
                        key={index}
                        onClick={() => handleIndex(index)}
                    >
                        <td>{index}</td>
                        {/* eslint-disable-next-line react/jsx-key */}
                        <td>
                            {flight.codes.map((code, i) => (
                                <span title={flight.names[i]} key={code}>
                                    {code}&nbsp;
                                </span>
                            ))}
                        </td>
                        <td>{flight.cost}</td>
                        <td>{flight.names.length - 2}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default JourneyTable
