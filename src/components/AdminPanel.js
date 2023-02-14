import React from 'react'
//import { Row, Col } from 'reactstrap'
import AddCity from './AddCity'
import AddFlight from './AddFlight'

const AdminPanel = () => {
  return (
    <div
      className="px-3"
      style={{
        display: 'flex',
        flexDirection: 'col',
        gap: '10px',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      <div className="w-75">
        <AddCity />
      </div>
      <div className="w-75">
        <AddFlight />
      </div>
    </div>
  )
}
export default AdminPanel
