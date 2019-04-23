//Question One Is referring to type number 7
import React, { Component } from 'react'
import Rating from 'react-rating'
import Cloud from '../assets/Clouds.png'
import { Progress } from 'reactstrap';
import "./PageOne.css";


export default class PageOne extends Component
{
  render(){
    return(
      <>
        <div className="backgroundContainer">

        <div className="">
                    <h2 className="welcomePersona font-weight-bold">Here we go! Page 1 of 5.</h2>
                    <h4 className="welcomePersonaSummary headerDesc">Remember to answer as accurately as possible.</h4><hr></hr>
        </div>

          {/* Question 1 */}
          <p className="questions">1. Life goes better if you look on the positive side instead of the negative.</p>
          <Rating className="rating"
          stop = {6} />

          <div  className="centerProgress">
              <div className="progressBar">
                  <Progress striped animated color="dark" value="20" />
              </div>
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