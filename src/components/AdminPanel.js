import React from 'react'
import { Row, Col } from 'reactstrap'
import AddCity from './AddCity'
import AddFlight from './AddFlight'

const AdminPanel = () => {
    return (
        <div className="px-3">
            <Row>
                <Col className="lg-6 w-50">
                    <AddCity />
                </Col>
                <Col className="lg-6">
                    <AddFlight />
                </Col>
            </Row>
        </div>
    )
}
export default AdminPanel
