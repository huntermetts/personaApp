import React, { Component } from 'react'
import Cloud from '../assets/Clouds.png'
import { Progress } from 'reactstrap';
import "./Summary.css";
export default class Summary extends Component{

    render(){
        return(
        <>
            <div className="backgroundContainer">
                <div className="">
                    <h2 className="welcomePersona font-weight-bold">Awesome {this.props.userName}.</h2>
                    <hr></hr>
                    <h4 className="summaryPersonaSummary headerDesc">This test consists of <strong>36 </strong>questions and by the end of the test we'll be able to <strong>establish</strong> your type!<br></br></h4>

                    <hr></hr>

                    <h6 className="summaryPersonaSummary headerDesc">This test is also a <strong>100% free </strong>and open source project brought to you by <strong>Hunter Metts</strong> and <strong>Jordan Rosas</strong>. <br></br> If you feel lead to contribute to our efforts or take a look at the code for this project, we've provided a link at the <strong>bottom</strong> of each page to our <strong>GitHub</strong> and <strong>Venmo!</strong> <br></br> <strong>Happy testing!</strong></h6>
                </div>
                    <div className="flexContainerForForm">

                        <div className="stepOneButtonContainer">
                            <button id = "WelcomeButton" type="button" className="btn text-dark welcomeButton" onClick={() => this.props.logUserName()}>Begin</button>
                        </div>

                        {/* <div  className="centerProgress">
                            <div className="progressBar">
                                <Progress striped animated color="success" value="25" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <img className = "Cloud" src = {Cloud} alt = "cloud" />
                <img className = "Cloud2" src = {Cloud} alt = "cloud" />
                <img className = "Cloud3" src = {Cloud} alt = "cloud" />
                <img className = "Cloud4" src = {Cloud} alt = "cloud" />
                <img className = "Cloud5" src = {Cloud} alt = "cloud" />

                <div className="centerLinks">
                       <a href="https://venmo.com/Hunter-Metts" className="personalLinks">Hunter Metts Venmo</a>
                       <a href="#" className="personalLinks">Jordan Rosas Venmo</a>
                       <a href="https://github.com/huntermetts/personaApp" className="personalLinks">Project Code</a>
                </div>
        </>
        )

    }
}