import React, { useContext } from 'react'
import { Modal } from 'reactstrap'
import { ModalContext } from '../context/ModalContext'
import RegisterCard from '../views/RegisterCard'
import LoginCard from '../views/LoginCard'
import PropTypes from 'prop-types'

const ModalWrapper = (props) => {
  const { modalToggle, setModalToggle } = useContext(ModalContext)
  const handleModalToggle = () => {
    setModalToggle(!modalToggle)
  }
  const modalType = props.modalType
  if (modalType === 'modal-login') {
    return (
      <>
        <Modal
          className="modal-dialog-centered"
          size="sm"
          isOpen={modalToggle}
          toggle={handleModalToggle}
        >
          <LoginCard />
        </Modal>
      </>
    )
  }
  return (
    <>
      <Modal
        className="modal-dialog-centered"
        size="md"
        isOpen={modalToggle}
        toggle={handleModalToggle}
      >
        <RegisterCard />
      </Modal>
    </>
  )
}
ModalWrapper.propTypes = {
  modalType: PropTypes.string,
}
export default ModalWrapper
