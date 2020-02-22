//Question One Is referring to type number 7
import React, { Component } from 'react'
import Rating from 'react-rating'
import Cloud from '../../assets/Clouds.png'
import { Progress } from 'reactstrap';
import "./style.css";


export default class PageTwo extends Component
{

  state={
    Question24:1,
    Question25:1,
    Question26:1,
    Question27:1,
    Question28:1,
    Question29:1,
    Question30:1,
    Question31:1,
    Question32:1,
    Question33:1,
    Question34:1,
    Question35:1,
    Question36:1,
    Question37:1,
    Question38:1,
    Question39:1,
    Question40:1,
    Question41:1,
    Question42:1,
    Question43:1,
    Question44:1,
    Question45:1,
    Question46:1
  }

  //Will grab the state of the rate ex: 1-6
  handleRatingChange = (rating) => {
    this.setState({Question1:rating})
  
  }

  handleRatingChange2 = (rating) => {
    this.setState({Question2:rating})
    console.log("Question 2: " + rating)
  }

  handleRatingChange3 = (rating) => {
    this.setState({Question3:rating})
    console.log("Question 3: " + rating)
  }

  handleRatingChange4 = (rating) => {
    this.setState({Question4:rating})
    console.log("Question 4: " + rating)
  }

  handleRatingChange5 = (rating) => {
    this.setState({Question5:rating})
    console.log("Question 5: " + rating)
  }

  handleRatingChange6 = (rating) => {
    this.setState({Question6:rating})
    console.log("Question 6: " + rating)
  }

  handleRatingChange7 = (rating) => {
    this.setState({Question7:rating})
    console.log("Question 7: " + rating)
  }

  handleRatingChange8 = (rating) => {
    this.setState({Question8:rating})
    console.log("Question 8: " + rating)
  }

  handleRatingChange9 = (rating) => {
    this.setState({Question9:rating})
    console.log("Question 9: " + rating)
  }

  handleRatingChange10 = (rating) => {
    this.setState({Question10:rating})
    console.log("Question 10: " + rating)
  }

  handleRatingChange11 = (rating) => {
    this.setState({Question11:rating})
    console.log("Question 11: " + rating)
  }

  handleRatingChange12 = (rating) => {
    this.setState({Question12:rating})
    console.log("Question 12: " + rating)
  }

  handleRatingChange13 = (rating) => {
    this.setState({Question13:rating})
    console.log("Question 13: " + rating)
  }

  handleRatingChange14 = (rating) => {
    this.setState({Question14:rating})
    console.log("Question 14: " + rating)
  }

  handleRatingChange15 = (rating) => {
    this.setState({Question15:rating})
    console.log("Question 15: " + rating)
  }

  handleRatingChange16 = (rating) => {
    this.setState({Question16:rating})
    console.log("Question 16: " + rating)
  }

  handleRatingChange17 = (rating) => {
    this.setState({Question17:rating})
    console.log("Question 17: " + rating)
  }

  handleRatingChange18 = (rating) => {
    this.setState({Question18:rating})
    console.log("Question 18: " + rating)
  }

  handleRatingChange19 = (rating) => {
    this.setState({Question19:rating})
    console.log("Question 19: " + rating)
  }

  handleRatingChange20 = (rating) => {
    this.setState({Question20:rating})
    console.log("Question 20: " + rating)
  }

  handleRatingChange21 = (rating) => {
    this.setState({Question21:rating})
    console.log("Question 21: " + rating)
  }

  handleRatingChange22 = (rating) => {
    this.setState({Question22:rating})
    console.log("Question 22: " + rating)
  }

  handleRatingChange23 = (rating) => {
    this.setState({Question23:rating})
    console.log("Question 23: " + rating)
  }

  pushToSecondPage = () => {
    this.props.history.push("/page_three")
}

  render(){
    return(
      <>
        <div className="backgroundContainer">

        <div className="">
            <h2 className="welcomePersona font-weight-bold">Here we go! Page 2 of 5.</h2>
            <h4 className="welcomePersonaSummary headerDesc">Remember to answer as accurately as possible.</h4><hr></hr>
        </div>

          {/* Question 1 */}
          <p className="questions">24. I often sense what's going on inside others before they say it out loud.</p>
          <Rating className="rating" onChange={this.handleRatingChange1}
          stop = {6}
          initialRating = {this.state.Question24}

        />

         {/* Question 2 */}
        <p className="questions">25. Whatever I'm doing, I usually do it with enthusiasm
        </p>
        <Rating className="rating" onChange={this.handleRatingChange2}
          stop = {6}
          initialRating = {this.state.Question25}
        />

        {/* Question 3 */}
        <p className="questions">26. I have to know someone very well before I'll let him or her share in my private life. 
        </p>
        <Rating className="rating" onChange={this.handleRatingChange3}
          stop = {6}
          initialRating = {this.state.Question26}
        />

         {/* Question 4 */}
        <p className="questions">27. It's important for me that something always be “going on.”
        </p>
        <Rating className="rating" onChange={this.handleRatingChange4}
          stop = {6}
          initialRating = {this.state.Question27}
        />

        {/* Question 5 */}
        <p className="questions">28.  It’s easy for me to share. 
        </p>
        <Rating className="rating" onChange={this.handleRatingChange5}
          stop = {6}
          initialRating = {this.state.Question28}
        />

        {/* Question 6 */}
        <p className="questions">29. I like to express complex connections with simple images. 
        </p>
        <Rating className="rating" onChange={this.handleRatingChange6}
          stop = {6}
          initialRating = {this.state.Question29}
        />

             {/* Question 7 */}
        <p className="questions">30. Sometimes I feel overwhelmed by a nameless anxiety. 
        </p>
        <Rating className="rating" onChange={this.handleRatingChange7}
          stop = {6}
          initialRating = {this.state.Question30}
        />

           {/* Question 8 */}
          <p className="questions">31. When projects or relationships get too boring or do nothing for me, I abandon  them. 
        </p>
        <Rating className="rating" onChange={this.handleRatingChange8}
          stop = {6}
          initialRating = {this.state.Question31}
        />

         {/* Question 9 */}
        <p className="questions">32. Even at games the most important thing for me is winning
        </p>
        <Rating className="rating" onChange={this.handleRatingChange9}
          stop = {6}
          initialRating = {this.state.Question32}
        />

        {/* Question 10 */}
        <p className="questions">33. I can become enthusiastic over new and unusual ideas
        </p>
        <Rating className="rating" onChange={this.handleRatingChange10}
          stop = {6}
          initialRating = {this.state.Question33}
        />

        {/* Question 11 */}
        <p className="questions">34.  Many people pour their hearts out to me
        </p>
        <Rating className="rating" onChange={this.handleRatingChange11}
          stop = {6}
          initialRating = {this.state.Question34}
        />

        {/* Question 12 */}
        <p className="questions">35. I avoid Divergent attention-getting behavior
        </p>
        <Rating className="rating" onChange={this.handleRatingChange12}
          stop = {6}
          initialRating = {this.state.Question35}
        />
        {/* Question 13 */}
        <p className="questions">36.  I am especially sensitive
        </p>
        <Rating className="rating" onChange={this.handleRatingChange13}
          stop = {6}
          initialRating = {this.state.Question36}
        /> {/* Question 14 */}
        <p className="questions">37.  In contradictory cases both sides often strike me as equally right.
        </p>
        <Rating className="rating" onChange={this.handleRatingChange14}
          stop = {6}
          initialRating = {this.state.Question37}
        /> {/* Question 15 */}
        <p className="questions">38.  I feel theres something about me that sets me apart from other people
        </p>
        <Rating className="rating" onChange={this.handleRatingChange15}
          stop = {6}
          initialRating = {this.state.Question38}
        /> {/* Question 16 */}
        <p className="questions">39. When life gives me lemons, I make lemonade
        </p>
        <Rating className="rating" onChange={this.handleRatingChange16}
          stop = {6}
          initialRating = {this.state.Question39}
        /> {/* Question 17 */}
        <p className="questions">40. I often don’t put my good ideas down on paper and projects that I have in my head often stay put in the planning stage
        </p>
        <Rating className="rating" onChange={this.handleRatingChange17}
          stop = {6}
          initialRating = {this.state.Question40}
        /> {/* Question 18 */}
        <p className="questions">41. I would rather disparage myself than show my abilities
        </p>
        <Rating className="rating" onChange={this.handleRatingChange18}
          stop = {6}
          initialRating = {this.state.Question41}
        /> {/* Question 19 */}
        <p className="questions">42. I find contact with many people or intimacy (even when its nice) stressful. Afterwards I need some time to be alone and “tank up”
        </p>
        <Rating className="rating" onChange={this.handleRatingChange19}
          stop = {6}
          initialRating = {this.state.Question42}
        /> {/* Question 20 */}
        <p className="questions">43. When one of my friends has a problem, I speak to him or her about it 
        </p>
        <Rating className="rating" onChange={this.handleRatingChange20}
          stop = {6}
          initialRating = {this.state.Question43}
        />

         {/* Question 21 */}
        <p className="questions">44.  People complain that in personal relationship i’m too dramatic
        </p>
        <Rating className="rating" onChange={this.handleRatingChange21}
          stop = {6}
          initialRating = {this.state.Question44}
        />

          {/* Question 22 */}
          <p className="questions">45. It’s important to “Sell” yourself
        </p>
        <Rating className="rating" onChange={this.handleRatingChange22}
          stop = {6}
          initialRating = {this.state.Question45}
        /> {/* Question 23 */}
          <p className="questions">46. I believe that other people misunderstand my deepest feelings
        </p>
        <Rating className="rating" onChange={this.handleRatingChange23}
          stop = {6}
          initialRating = {this.state.Question46}
        />

        <div className="stepOneButtonContainers">
            <button id = "WelcomeButton" type="button" className="btn text-dark welcomeButton" onClick={() => this.pushToSecondPage()}>Next</button>
        </div>


          <div  className="centerProgress">
              <div className="progressBar">
                  <Progress striped animated color="dark" value="40" />
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