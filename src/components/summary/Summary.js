import React, { Component } from 'react'
import Cloud from '../assets/Clouds.png'
import { Progress } from 'reactstrap';
import "./Summary.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default class Summary extends Component{
    // Set initial state
    constructor(props) {
        super(props);
    this.state = {
        modal: false
    }
        this.toggle = this.toggle.bind(this);
    }



    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    pushToPageOne = () => {
        // this.props.history.push("/pageOne")
        this.toggle();
    }


    render(){
        return(
        <>
            <div className="backgroundContainer">
                <div className="">
                    <h2 className="welcomePersona font-weight-bold">Awesome {this.props.userName}.</h2>
                    <hr></hr>
                    <h4 className="summaryPersonaSummary headerDesc">This test consists of <strong>115 </strong>questions using a scale from <strong>0</strong> to <strong>6</strong> to indicate what enneagram type you are!<br></br>
                    If you completely <strong>disagree</strong> with the statement an appropriate response would be <strong>0</strong>, while if you completely <strong>agree</strong> with the statement an appropriate response would be <strong>6</strong>.<br></br>
                    Please remember to answer these questions <strong>honestly</strong> and what your <strong>natural intuition</strong> tells you.<br></br></h4>
                    <hr></hr>


                    {/* Add to modal for mobile/desktop versions */}
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader className="summaryModalHeader" toggle={this.toggle}><div className="modalPersona"><strong>Persona</strong></div></ModalHeader>
                <ModalBody className="modalBody">
                <p>This test is also a <strong>100% free </strong>and open source project brought to you by <strong>Hunter Metts</strong> and <strong>Jordan Rosas</strong>. <br></br> If you feel lead to contribute to our efforts or take a look at the code for this project, we've provided a link at the <strong>bottom</strong> of each page to our <strong>GitHub</strong> and <strong>Venmo!</strong> <br></br> <strong>Happy testing!</strong></p>

                </ModalBody>
                <ModalFooter className="modalButtonCenter">
                    <Button color="dark" className="modalButton" onClick={() => this.props.history.push("/pageOne")}>Let's go already!</Button>{' '}
                </ModalFooter>
                </Modal>
                </div>
                    <div className="flexContainerForForm">

                        <div className="stepOneButtonContainer">
                            <button id = "WelcomeButton" type="button" className="btn text-dark welcomeButton" onClick={() => this.pushToPageOne()}>Begin</button>
                        </div>
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