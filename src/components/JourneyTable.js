import React, { useContext } from 'react'
import { Table, UncontrolledPopover, PopoverBody, Button } from 'reactstrap'
import { FlightsContext } from '../context/FlightsContext'
import { IndexContext } from '../context/IndexContext'
import { FactorContext } from '../context/FactorContext'

const JourneyTable = () => {
    const { flights } = useContext(FlightsContext)
    const { setIndex } = useContext(IndexContext)
    const { factor } = useContext(FactorContext)

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
                    <th>Time</th>
                    <th>Cost</th>
                    <th>Stops</th>
                </tr>
            </thead>
            <tbody>
                {flights.map((flight, index) => {
                    let m = flight.cost % 60
                    let h = (flight.cost - m) / 60
                    let price = `${flight.altCost} $`
                    if (factor != 'time') {
                        m = flight.altCost % 60
                        h = (flight.altCost - m) / 60
                        price = `${flight.altCost} $`
                    }
                    let hm = `${h < 10 ? '0' : ''}${h} : ${
                        m < 10 ? '0' : ''
                    }${m}`
                    return (
                        <tr
                            scope="row"
                            key={index}
                            onClick={() => handleIndex(index)}
                        >
                            <td>{index}</td>
                            <td>
                                {flight.codes.map((code, idx) => (
                                    <span key={idx} className="w-100 mr-2">
                                        <Button
                                            color="info"
                                            size="sm"
                                            type="button"
                                            outline
                                            id={code}
                                        >
                                            {code}
                                        </Button>
                                        <UncontrolledPopover
                                            placement="top"
                                            target={code}
                                            trigger="focus"
                                            className="popover-info"
                                        >
                                            <PopoverBody>
                                                {flight.names[idx]}
                                            </PopoverBody>
                                        </UncontrolledPopover>
                                    </span>
                                ))}
                            </td>
                            <td>{hm}</td>
                            <td>{price}</td>
                            <td>{flight.names.length - 2}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}
export default JourneyTable
