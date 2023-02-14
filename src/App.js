import React, { useState, useEffect } from 'react'
import './App.css'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import { ModalContext } from './context/ModalContext'
import AppHome from './views/AppHome'
import ModalWrapper from './components/ModalWrapper'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginCard from './views/LoginCard'
import RegisterCard from './views/RegisterCard'
import Map from './views/Map'
import { UserContext } from './context/UserContext'
import Profile from './views/Profile'
import axios from 'axios'
import { CitiesContext } from './context/CitiesContext'

const App = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [auth, setAuth] = useState(false)
  const [cities, setCities] = useState([])

  const [modalToggle, setModalToggle] = useState(false)
  const [modalType, setModalType] = useState('')
  const checkModalType = (event) => {
    const {
      target: {
        dataset: { modal },
      },
    } = event
    if (modal) setModalType(modal)
  }
  const hwfit = {
    maxWidth: '100vw',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
  }

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/login')
      .then((response) => {
        console.log('response', response.data)
        if (!response.data.error) {
          setUsername(response.data.username)
          setEmail(response.data.email)
          setRole(response.data.role)
          setAuth(true)
        } else {
          console.log('Error:', response.data.error)
          setAuth(false)
        }
      })
      .catch((error) => {
        console.log('error', error)
      })
  }, [])

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

  return (
    <>
      <Router>
        <div style={hwfit} onClick={checkModalType}>
          <UserContext.Provider
            value={{
              username,
              setUsername,
              email,
              setEmail,
              role,
              setRole,
              auth,
              setAuth,
            }}
          >
            <ModalContext.Provider value={{ modalToggle, setModalToggle }}>
              <CitiesContext.Provider value={{ cities, setCities }}>
                <AppHeader />
                <Routes>
                  <Route path="/" element={<AppHome />} />
                  <Route path="/login" element={<LoginCard />} />
                  <Route path="/register" element={<RegisterCard />} />
                  <Route path="/map" element={<Map />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
                <ModalWrapper modalType={modalType} />
                <AppFooter />
              </CitiesContext.Provider>
            </ModalContext.Provider>
          </UserContext.Provider>
        </div>
      </Router>
    </>
  )
}
export default App
