import React, { useState, useContext } from 'react'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'
import { ModalContext } from '../context/ModalContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const DropMenu = () => {
    const { setUsername, setEmail, setRole, auth, setAuth } =
        useContext(UserContext)
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    let navigate = useNavigate()

    const { modalToggle, setModalToggle } = useContext(ModalContext)
    const handleModalToggle = () => {
        setModalToggle(!modalToggle)
    }

    const handleLogout = () => {
        axios
            .get('http://localhost:8080/api/logout')
            .then(() => {
                setUsername('')
                setEmail('')
                setRole('')
                setAuth(false)
                console.log('Good bye.')
                navigate('/')
            })
            .catch((err) => console.log('Error logging out: ' + err))
    }

    return (
        <>
            <Dropdown isOpen={toggle} toggle={handleToggle}>
                <DropdownToggle caret color="info" outline>
                    <i className="fa fa-user mr-2" />
                    Account
                </DropdownToggle>
                <DropdownMenu className="bg-info p-2" style={{ margin: 0 }}>
                    {auth != true ? (
                        <div>
                            <DropdownItem
                                onClick={handleModalToggle}
                                data-modal="modal-login"
                            >
                                <i className="fa fa-sign-in mr-2" /> Login
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                                onClick={handleModalToggle}
                                data-modal="modal-register"
                            >
                                <i className="fa fa-user-plus mr-2" />
                                Register
                            </DropdownItem>
                        </div>
                    ) : (
                        <div>
                            <DropdownItem href="/profile">
                                <i className="fa fa-sign-out mr-2" /> Profile
                            </DropdownItem>
                            <DropdownItem onClick={handleLogout}>
                                <i className="fa fa-sign-out mr-2" /> Logout
                            </DropdownItem>
                        </div>
                    )}
                </DropdownMenu>
            </Dropdown>
        </>
    )
}
export default DropMenu
