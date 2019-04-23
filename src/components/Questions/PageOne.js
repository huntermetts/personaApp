//Question One Is referring to type number 7
import React, { Component } from 'react'
import Rating from 'react-rating'
import Cloud from '../assets/Clouds.png'


export default class PageOne extends Component
{
  render(){
    return(
      <>
        <h1>Page One Questions</h1>
        <Rating 
        stop = {6}
        />
        <img className = "Cloud" src = {Cloud} alt = "cloud" />
        <img className = "Cloud2" src = {Cloud} alt = "cloud" />
        <img className = "Cloud3" src = {Cloud} alt = "cloud" />
        <img className = "Cloud4" src = {Cloud} alt = "cloud" />
        <img className = "Cloud5" src = {Cloud} alt = "cloud" />

      </>
    )
  }
}