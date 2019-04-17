import React, { Component } from 'react'
import Cloud from '../assets/Clouds.png'
export default class Welcome extends Component{
  render(){
    return(
      <>
        <img className = "Cloud" src = {Cloud} alt = "cloud Image" />
        <img className = "Cloud2" src = {Cloud} alt = "cloud Image" />
        <img className = "Cloud3" src = {Cloud} alt = "cloud Image" />
        <img className = "Cloud4" src = {Cloud} alt = "cloud Image" />
      </>
    )

  }
}
