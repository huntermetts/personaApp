import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Welcome from "./welcome/Welcome";
import Summary from "./summary/Summary"

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
    console.log(stateToChange)
  }

  //Captures state and console.log to confirm state is being set
  // Used for testing state, now refactored.
  // logUserName = () => {
  //   alert(`The user's name is ${this.state.userName}`)
  // }

  render() {
    return (
      <React.Fragment>

        {/* Welcome page routed below */}
        <Route
          exact path="/" render={props => {
            return <Welcome {...props}
                    handleFieldChange = {this.handleFieldChange}
                    // logUserName = {this.logUserName}
                    userName = {this.userName}
                  />
          }}
        />


         {/* Page 1 of app routed below (summary page) */}
        <Route
          exact path="/summary" render={props => {
            return <Summary {...props}
                    handleFieldChange = {this.handleFieldChange}
                    // logUserName = {this.logUserName}
                    userName = {this.state.userName}
                  />
          }}
        />

      </React.Fragment>
    );
  }
}
