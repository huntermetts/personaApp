import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Welcome from "./welcome/Welcome";
import Summary from "./summary/Summary"
import PageOne from "./Questions/PageOne"

export default class ApplicationViews extends Component {

  state = {
    userName: "",
    // Page one:
    Question1:0,
    Question2:0,
    Question3:0,
    Question4:0,
    Question5:0,
    Question6:0,
    Question7:0,
    Question8:0,
    Question9:0,
    Question10:0,
    Question11:0,
    Question12:0,
    Question13:0,
    Question14:0,
    Question15:0,
    Question16:0,
    Question17:0,
    Question18:0,
    Question19:0,
    Question20:0,
    Question21:0,
    Question22:0,
    Question23:0,
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
  //Field Change to get users name before taking the test
  handleFieldChange = evt => {
    evt.preventDefault()
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  //Will grab the state of the rate ex: 0-6
  handleRatingChange = (rating) => {
    this.setState({rate:rating})
  }

  questionRate = (question, type, rate, questionState, questionType) => {
    question = rate 
    type += question
    console.log(question)
    console.log(type) 
    console.log(questionType)
    console.log(questionState)
    this.setState({
       [questionState]:question,
       [questionType]: type
    })
  }

  //Captures state and console.log to confirm state is being set
  // Used for testing state, now refactored.
  // logUserName = () => {
  //   alert(`The user's name is ${this.state.userName}`)
  // }

  resetSearch = () => {
    this.setState({userName:""});
    // Resetting question values
    this.setState({Question1:0});
    this.setState({Question2:0});
    this.setState({Question3:0});
    this.setState({Question4:0});
    this.setState({Question5:0});
    this.setState({Question6:0});
    this.setState({Question7:0});
    this.setState({Question8:0});
    this.setState({Question9:0});
    this.setState({Question10:0});
    this.setState({Question11:0});
    this.setState({Question12:0});
    this.setState({Question13:0});
    this.setState({Question14:0});
    this.setState({Question15:0});
    this.setState({Question16:0});
    this.setState({Question17:0});
    this.setState({Question18:0});
    this.setState({Question19:0});
    this.setState({Question20:0});
    this.setState({Question21:0});
    this.setState({Question22:0});
    this.setState({Question23:0});
  }

  render() {
    return (
      <React.Fragment>

        {/* Welcome page routed below */}
        <Route
          exact path="/" render={props => {
            return <Welcome {...props}
                    handleFieldChange = {this.handleFieldChange}
                    userName = {this.userName}
                  />
          }}
        />
        {/* Page 1 of app routed below (summary page) */}
        <Route
          exact path="/summary" render={props => {
            return <Summary {...props}
                    handleFieldChange = {this.handleFieldChange}
                    userName = {this.state.userName}
                  />
          }}
        />
        {/* Route for page one of questions */}
        <Route
          exact path="/pageOne" render={props => {
            return <PageOne {...props}
                    handleFieldChange = {this.handleFieldChange}
                    handleRatingChange = {this.handleRatingChange}
                    //==========================================
                    //PASSING QUESTION STATE
                    //==========================================
                    questionOne = {this.state.Question1}
                    questionTwo = {this.state.Question2}
                    questionThree = {this.state.Question3}
                    questionFour = {this.state.Question4}
                    questionFive = {this.state.Question5}
                    questionSix = {this.state.Question6}
                    questionSeven = {this.state.Question7}
                    questionEight = {this.state.Question8}
                    questionNine = {this.state.Question9}
                    questionTen = {this.state.Question10}
                    questionEleven = {this.state.Question11}
                    questionTwelve = {this.state.Question12}
                    questionThirteen = {this.state.Question13}
                    questionFourteen = {this.state.Question14}
                    questionFifteen = {this.state.Question15}
                    questionSixteen = {this.state.Question16}
                    questionSeventeen = {this.state.Question17}
                    questionEighteen = {this.state.Question18}
                    questionNineteen = {this.state.Question19}
                    questionTwenty = {this.state.Question20}
                    questionTwentyOne = {this.state.Question21}
                    questionTwentyTwo = {this.state.Question22}
                    questionTwentyThree = {this.state.Question23}
                    //==========================================
                    //PASSING Type STATE
                    //==========================================
                    TypeOne = {this.state.TypeOne}
                    TypeTwo = {this.state.TypeTwo}
                    TypeThree = {this.state.TypeThree}
                    TypeFour = {this.state.TypeFour}
                    TypeFive = {this.state.TypeFive}
                    TypeSix = {this.state.TypeSix}
                    TypeSeven = {this.state.TypeSeven} 
                    TypeEight = {this.state.TypeEight} 
                    TypeNine = {this.state.TypeNine}

                    questionRate = {this.questionRate}
                  />
          }}
        />

      </React.Fragment>
    );
  }
}
