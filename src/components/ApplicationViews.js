import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Welcome from "./welcome/Welcome";

export default class ApplicationViews extends Component {

  state = {
    typeOne: 0,
    typeTwo:0,
    typeThree: 0,
    typeFour: 0,
    typeFive: 0,
    typeSix: 0,
    typeSeve: 0,
    typeEight: 0,
    typeNine: 0,
    userName: ''
  }

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return <Welcome {...props}
                  />
          }}
        />

      </React.Fragment>
    );
  }
}
