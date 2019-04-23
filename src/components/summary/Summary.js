import React, { Component } from 'react'
import Cloud from '../assets/Clouds.png'
import { Progress } from 'reactstrap';
import "./Summary.css";
export default class Summary extends Component{

    pushToPageOne = () => {
        this.props.history.push("/pageOne")
    }

    render(){
        return(
        <>
            <div className="backgroundContainer">
                <div className="">
                    <h2 className="welcomePersona font-weight-bold">Awesome {this.props.userName}.</h2>
                    <hr></hr>
                    <h4 className="summaryPersonaSummary headerDesc">This test consists of <strong>115 </strong>questions using a scale from 0 to 6 indicate to what
                    degree any statement applies to you, and is "typical" of you. <strong>0 =
                    completely disagree</strong>, <strong>6 = completely agree</strong>, <strong>1 through 5 = the various stages between the two extremes</strong>. Before you mark your answer, consider the broad, overarching patterns of your life. On the whole, does this statement fit me or
                    not? by the end of the test we'll be able to <strong>establish</strong> your type!<br></br></h4>
                    <hr></hr>




                    {/* Add to modal for mobile version */}
                    {/* 
                    <h6 className="summaryPersonaSummary headerDesc">This test is also a <strong>100% free </strong>and open source project brought to you by <strong>Hunter Metts</strong> and <strong>Jordan Rosas</strong>. <br></br> If you feel lead to contribute to our efforts or take a look at the code for this project, we've provided a link at the <strong>bottom</strong> of each page to our <strong>GitHub</strong> and <strong>Venmo!</strong> <br></br> <strong>Happy testing!</strong></h6> */}
                </div>
                    <div className="flexContainerForForm">

                        <div className="stepOneButtonContainer">
                            <button id = "WelcomeButton" type="button" className="btn text-dark welcomeButton" onClick={() => this.pushToPageOne()}>Begin</button>
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
                    <a href="https://venmo.com/Jordan-Rosas-3" className="personalLinks">Jordan Rosas Venmo</a>
                    <a href="https://github.com/huntermetts/personaApp" className="personalLinks">Project Code</a>
                </div>
        </>
        )

    }
}