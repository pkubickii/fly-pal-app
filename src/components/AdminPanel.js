import React from 'react'
import { Row, Col } from 'reactstrap'
import AddCity from './AddCity'

const AdminPanel = () => {
    return (
        <>
            <Row>
                <Col className="lg-6">
                    <AddCity />
                </Col>
                <Col className="lg-6">
                    <AddCity />
                </Col>
            </Row>
        </>
    )
}
export default AdminPanel
