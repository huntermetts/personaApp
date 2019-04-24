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
          stop = {6}
          initialRating = {1}

        />

         {/* Question 2 */}
         <p className="questions">2. I can observe emotionally tense situations while keeping a sober distance from it all.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

        {/* Question 3 */}
        <p className="questions">3. I like to work within the framework of an institution.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

         {/* Question 4 */}
         <p className="questions">4. It's important to make an impression.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

        {/* Question 5 */}
        <p className="questions">5. I would like to be independent.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

        {/* Question 6 */}
        <p className="questions">6. The most important thing for me is that the people around me feel good.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

             {/* Question 7 */}
             <p className="questions">7. For me it's important to plan the future, so that I know what’s heading my way.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

           {/* Question 8 */}
           <p className="questions">8. When someone needs my help, I'm ready to put all my energy to work for him or her.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

         {/* Question 9 */}
         <p className="questions">9.  I want to live emotionally passionately with all my senses, even if it hurts.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

        {/* Question 10 */}
        <p className="questions">10.  I have a hard time putting up with imperfections, whether in or in others.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

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

         <div className="centerLinks">
                    <a href="https://venmo.com/Hunter-Metts" className="personalLinks">Hunter Metts Venmo</a>
                    <a href="https://venmo.com/Jordan-Rosas-3" className="personalLinks">Jordan Rosas Venmo</a>
                    <a href="https://github.com/huntermetts/personaApp" className="personalLinks">Project Code</a>
        </div>

      </>
    )
  }
}