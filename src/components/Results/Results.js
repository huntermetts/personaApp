import React, { Component } from 'react'
import Cloud from '../assets/Clouds.png'
// import "./Welcome.css";


export default class Results extends Component{


    state={
         // Types:
    TypeOne:0,
    TypeTwo:0,
    TypeThree:0,
    TypeFour:0,
    TypeFive:0,
    TypeSix:0,
    TypeSeven: 0,
    TypeEight:0,
    TypeNine:0
    }


    pushToSummaryPage = () => {
        this.props.history.push("/summary")
    }

    render(){
        return(
        <>
            <div className="backgroundContainer">
                <div className="">
                    <h2 className="welcomePersona font-weight-bold">{this.props.userName}, your type is</h2>

                </div>
                    <div className="flexContainerForForm">
                        <form className="formContainer">
                            <div className="row">

                                <div className="col">
                                    <label htmlFor="name" className="enterName">Enter your name to get started.</label>
                                    <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="userName" placeholder="First Name"></input>

                                </div>

                            </div>
                        </form>

                        <div className="stepOneButtonContainer">
                            <button type="button" className= "btn button btn1" onClick={() => this.pushToSummaryPage()}>Let's go!</button>
                        </div>

                        {/* <div  className="centerProgress">
                            <div className="progressBar">
                                <Progress striped animated color="success" value="25" />
                            </div>
                            btn text-dark welcomeButton button
                        </div> */}
                    </div>
                </div>
                <img className = "Cloud" src = {Cloud} alt = "cloud" />
                <img className = "Cloud2" src = {Cloud} alt = "cloud" />
                <img className = "Cloud3" src = {Cloud} alt = "cloud" />
                <img className = "Cloud4" src = {Cloud} alt = "cloud" />
                <img className = "Cloud5" src = {Cloud} alt = "cloud" />
        </>
        )

    }
}