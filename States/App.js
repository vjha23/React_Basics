import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      answer:"Yes"
    }
  }
  render(){
    return (
     <div>
        <h1>Is sate important to know? {this.state.answer}</h1>
       
     </div>
    )
  }
}




export default App;
