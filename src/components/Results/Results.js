import React, { Component } from 'react'
import Cloud from '../assets/Clouds.png'
import "./Results.css";


export default class Results extends Component{

    state={
        TypeOne:this.props.history.location.state.TypeOne,
        TypeTwo:this.props.history.location.state.TypeTwo,
        TypeThree:this.props.history.location.state.TypeThree,
        TypeFour:this.props.history.location.state.TypeFour,
        TypeFive:this.props.history.location.state.TypeFive,
        TypeSix:this.props.history.location.state.TypeSix,
        TypeSeven: this.props.history.location.state.TypeSeven,
        TypeEight:this.props.history.location.state.TypeEight,
        TypeNine:this.props.history.location.state.TypeNine,
        YourType:'',
        Description:''
    }

    pushToSummaryPage = () => {
        this.props.history.push("/summary")
    }

    render(){
        console.log(this.props)
        let types = this.state
        
        var max = Math.max.apply(null,Object.keys(types).map(function(x){ return types[x] }));
        let yourType = Object.keys(types).filter(function(x){ return types[x] == max; })[0];

        if (yourType === "TypeOne"){
            this.setState({
                YourType:'Type 1',
                Description:'Bees are super active and productive like Type Ones. They create intricate, orderly structures like hives and honeycombs. They are workers extraordinaire. But, like a One, they can sting when they’re angry. (Though a Type One is not going to call it anger. They’d say you’re not doing it right.) Also? Bees make honey. Honey is yummy and sweet, like the Divine Perfection of an integrated One.'
            })
        } else if (yourType === "TypeTwo"){
            this.setState({
                YourType:'Type 2',
                Description:'Dogs are loving and loyal. They’re attentive and tuned in to the needs of those they care about. They’re sweet and fun to be around. Just like a Two! Dogs are also inexhaustible in their need to please. Which can lead to being a bit, um, clingy and overly focused on what their “masters” want. Just like a Two! Nevertheless, dogs represent the Divine Love of an integrated Two.'
            })
        } else if (yourType === "TypeThree"){
            this.setState({
                YourType:'Type 3',
                Description:'In this case, we’re talking about the male peacock, with those beautiful showy feathers. Just like the Three, who’s so good at showing up in all their magnificence. The downside? What does the peacock look like when he’s not showing off his feathers? Or what if he’s a she and doesn’t have all that fancy plumage? That’s when we see the beautiful Authenticity of the integrated Three.'
            })
        } else if (yourType === "TypeFour"){
            this.setState({
                YourType:'Type 4',
                Description:'Cats are unique creatures. Each cat is its own little universe, with needs and preferences galore. They’re independent. They’re intuitive. They’re beautiful. Four! Also? Cats can be needy. Think yowling cat. And they tend to be drawn to those who want nothing to do with them, while ignoring those who adore them. Four! As for integration, check out the purr and bliss of a cat, and catch a glimpse of the Peaceful Balance of an integrated Four.'
            })
        } else if (yourType === "TypeFive"){
            this.setState({
                YourType:'Type 5',
                Description:'Like an owl, Fives are chill and wise. And they only come out at night, when things aren’t so crazy and hectic. (Because we don’t want to overwhelm a Five!) Owls can also be pretty aggressive, like a Five with a strong opinion. And owls are literally “above it all,” like Fives. Or like Fives think they are! On the high side, the Owl represents the Omniscience of the integrated Five.'
            })
        } else if (yourType === "TypeSix"){
            this.setState({
                YourType:'Type 6',
                Description:'Deer can have strong bonds with their herds, like the loyalty of a Six. They’re playful and attentive. They have excellent night vision, so they see things others miss. They can also get spooked super easily, like a hypervigilant Six. Watch out! Danger’s coming! On the integrated side, deers embody Freedom and Grace, the Divine qualities of an integrated Six.'
            })
        } else if (yourType === "TypeSeven"){
            this.setState({
                YourType:'Type 7',
                Description:'Monkeys are fun! They’re mischievous! They like to stay active! They’re super social and like to hang with their peeps, because that’s really fun! And did I mention they like to have fun?! Yeah. Seven. Monkeys are also curious and clever, which can lead to naughtiness. And they can be a bit manic and unfocused. So there’s that. On the integrated side, Monkeys represent the Divine quality of Joy.'
            })
        } else if (yourType === "TypeEight"){
            this.setState({
                YourType:'Type 8',
                Description:'Bulls are badass. They’re strong as hell. They bust through any obstacle in their way. You don’t mess with a bull. They’re a take-charge, big-energy, get-stuff-done animal. Like Eights. But they can be a little scary and overwhelming for those who aren’t prepared for their badassery. Like Eights. On the high side, bulls stand for the Power of the Divine.'
            })
        } else if (yourType === "TypeNine") {
            this.setState({
                YourType:'Type 9',
                Description:'Whales go with the flow, like Nines. Whales are chill and peaceful, like Nines. Whales are in tune with their environment and the whales around them, like Nines. (Except Nines are in tune with the people around them. But if there were whales around them? The Nine would totally be in tune with them.) Also? Whales aren’t super speedy, like fish and sharks. And they’re not known for their super-productive, can-do nature. Still, whales embody divine Serenity, like an integrated Nine.'
            })
        }

        return(
        <>
            <div className="backgroundContainer">
                <div className="">
                    <h2 className="welcomePersona font-weight-bold">Okay {this.props.userName}, looks like you're a {this.state.YourType}</h2>

                </div>
                    <div className="flexContainerForForm">
                        <form className="formContainer">
                            <div className="row">

                                <div className="col">
                                    <div className="description">
                                        {this.state.Description}
                                    </div>
                                </div>

                            </div>
                        </form>

                        {/* <div className="stepOneButtonContainer">
                            <button type="button" className= "btn button btn1" onClick={() => this.pushToSummaryPage()}>Let's go!</button>
                        </div> */}

                        {/* <div  className="centerProgress">
                            <div className="progressBar">
                                <Progress striped animated color="success" value="25" />
                            </div>
                            btn text-dark welcomeButton button
                        </div> */}
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