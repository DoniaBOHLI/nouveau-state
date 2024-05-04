import React, { Component } from 'react';
import './App.css';



class App extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
      person: {
      fullName: 'Donia BOHLI',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: require('./image/profil.jpg'),
      profession: ' Etudiante en  Developer web'
    },
    show:true,
    timer:0
    
  };this.timerInterval = null
}
 handleClick = () => { this.setState({show:!this.state.show})           }
 
 componentDidMount() {
  console.log('Component did Mount')
  this.timerInterval = setInterval(() =>
    this.setState(prevState => ({ timer: prevState.timer + 1 })), 1000)
}
 
  
  render() {
    const { person, show, timerInterval } = this.state;
    console.log("Person:", person);
    console.log("Show:", show);
    return (
      <div>
        {show && (
          <div style={{width:'18rem', height:' 24rem'}}>
           <h2>{person.fullName}</h2>
           <p>{person.bio}</p>
            <img src={person.imgSrc}style={{width:'18rem', height:' 14rem'}} alt="Profile" />
           <p>{person.profession}</p>
          </div>
        )}
        <button onClick={this.handleClick}>clik</button> 
        <p>Time Interval since mount: {this.state.timer} seconds</p>
      </div>
    );
  }
}
export default App;