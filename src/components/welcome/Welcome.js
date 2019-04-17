import React, { Component } from 'react'
import { Progress } from 'reactstrap';
import "./Welcome.css";


export default class Welcome extends Component{
    render () {
        return (
            <React.Fragment>
                <div className="backgroundContainer">
            <div className="">
                <h2 className="welcomePersona font-weight-bold">Welcome to Persona!</h2>
                <h4 className="welcomePersonaSummary headerDesc">A new way to take the enneagram test.</h4>
            </div>

                <div className="flexContainerForForm">
                    <form className="formContainer">
                        <div className="row">

                            <div className="col">
                                <label htmlFor="name" className="enterName">Enter your name to get started.</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="name"placeholder="First Name"></input>

                            </div>

                        </div>
                    </form>

                    <div className="stepOneButtonContainer">
                        <button type="submit" className="btn text-dark welcomeButton" onClick={() => this.props.history.push("/InputFormTwo")}>Let's go!</button>
                    </div>

                    {/* <div  className="centerProgress">
                        <div className="progressBar">
                            <Progress striped animated color="success" value="25" />
                        </div>
                    </div> */}
                </div>
                </div>
            </React.Fragment>
        )
    }
}
