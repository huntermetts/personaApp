import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Persona from './components/Persona'
import './index.css'

ReactDOM.render(
  <Router>
      <Persona />
  </Router>
  , document.getElementById('root'))
