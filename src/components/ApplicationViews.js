import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Welcome from "./welcome/Welcome";

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
  logUserName = () => {
    console.log(this.state.userName)
  }



  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return <Welcome {...props}
                    handleFieldChange = {this.handleFieldChange}
                    logUserName = {this.logUserName}
                  />
          }}
        />

      </React.Fragment>
    );
  }
}
