import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/vendor/nucleo/css/nucleo.css'
import './assets/vendor/font-awesome/css/font-awesome.min.css'
import './assets/css/argon-design-system-react.css'
//import "./assets/scss/argon-design-system-react.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
