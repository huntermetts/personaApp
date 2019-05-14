//Question One Is referring to type number 7
import React, { Component } from 'react'
import Rating from 'react-rating'
import Cloud from '../assets/Clouds.png'
import { Progress } from 'reactstrap';
import "./PageOne.css";


export default class PageOne extends Component
{

  state={
    rate: 0,
      // Page one:
    Question1:1,
    Question2:1,
    Question3:1,
    Question4:1,
    Question5:1,
    Question6:1,
    Question7:1,
    Question8:1,
    Question9:1,
    Question10:1,
    Question11:1,
    Question12:1,
    Question13:1,
    Question14:1,
    Question15:1,
    Question16:1,
    Question17:1,
    Question18:1,
    Question19:1,
    Question20:1,
    Question21:1,
    Question22:1,
    Question23:1
  }

  //Will grab the state of the rate ex: 1-6
  handleRatingChange1 = (rating) => {
    this.setState({Question1:rating})
    console.log(rating)
  }

  handleRatingChange2 = (rating) => {
    this.setState({Question2:rating})
    console.log(rating)
  }


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
          <Rating className="rating" onChange={this.handleRatingChange1}
          stop = {6}
          initialRating = {this.state.Question1}

        />

         {/* Question 2 */}
        <p className="questions">2. I can observe emotionally tense situations while keeping a sober distance from it all.
        </p>
        <Rating className="rating" onChange={this.handleRatingChange2}
          stop = {6}
          initialRating = {this.state.Question2}

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

        {/* Question 11 */}
        <p className="questions">11. Status and success play a large role in my life.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

        {/* Question 12 */}
        <p className="questions">12. In love the most important things âre being fair and behaving decently.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

        {/* Question 13 */}
        <p className="questions">13. I can readily adjust to the demands of a new situation.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        /> {/* Question 14 */}
        <p className="questions">14. I'm on the side of marginal groups, people oppressed and discriminated against (refugees, third world children, minorities, etc).
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        /> {/* Question 15 */}
        <p className="questions">15. Life is like a drama in which I'm both actor and spectator.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        /> {/* Question 16 */}
        <p className="questions">16. For the sake of advancing my career I’m prepared to neglect my marriage, family, or friends.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        /> {/* Question 17 */}
        <p className="questions">17. I’m often bothered by a bad conscience.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        /> {/* Question 18 */}
        <p className="questions">18. I have the impression that the so-called "authorities" are incompetent  but I usually hesitate to take action against them.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        /> {/* Question 19 */}
        <p className="questions">19. I like to let things run their course. Lots of times problems just take care of themselves.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        /> {/* Question 20 */}
        <p className="questions">20. I have to know where I belong.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

         {/* Question 21 */}
        <p className="questions">21. I enjoy getting attention from other people and being in the limelight.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

          {/* Question 22 */}
          <p className="questions">22. I often suppress my anger.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        /> {/* Question 23 */}
          <p className="questions">23. I have the feeling that I can never be completely fulfilled.
        </p>
          <Rating className="rating"
          stop = {6}
          initialRating = {1}

        />

         <div className="stepOneButtonContainers">
            <button id = "WelcomeButton" type="button" className="btn text-dark welcomeButton" onClick={() => this.pushToPageOne()}>Next</button>
         </div>


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