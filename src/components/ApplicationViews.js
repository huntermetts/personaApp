import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Welcome from "./welcome/Welcome";
import Summary from "./summary/Summary"
import PageOne from "./Questions/PageOne"
import PageTwo from './Questions/PageTwo'
import PageThree from "./Questions/PageThree"
import PageFour from './Questions/PageFour'
import PageFive from './Questions/PageFive'
import Results from "./Results/Results"

export default class ApplicationViews extends Component {

  state = {
    userName: ""
  }
  //Field Change to get users name before taking the test
  handleFieldChange = evt => {
    evt.preventDefault()
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }



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
          exact path="/page_one" render={props => {
            return <PageOne {...props}
                    handleFieldChange = {this.handleFieldChange}
                  />
          }}
        />
        <Route
          exact path="/page_two" render={props => {
            return <PageTwo {...props}
                    handleFieldChange = {this.handleFieldChange}
                  />
          }}
        />
        <Route
          exact path="/page_three" render={props => {
            return <PageThree {...props}
                    handleFieldChange = {this.handleFieldChange}
                  />
          }}
        />
        <Route
          exact path="/page_four" render={props => {
            return <PageFour {...props}
                    handleFieldChange = {this.handleFieldChange}
                  />
          }}
        />
        <Route
          exact path="/page_five" render={props => {
            return <PageFive {...props}
                    handleFieldChange = {this.handleFieldChange}
                  />
          }}
        />
         <Route
          exact path="/results" render={props => {
            return <Results {...props}
                    handleFieldChange = {this.handleFieldChange}
                    userName = {this.state.userName}
                  />
          }}
        />

      </React.Fragment>
    );
  }
}
