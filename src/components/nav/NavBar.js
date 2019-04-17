import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css";


class NavBar extends Component {
    render() {
        return (
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link personaLink" to="/">Persona</Link>
                    </li>
                </ul>
        )
    }
}

export default NavBar
