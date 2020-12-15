import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      log:false
    }
  }
  render(){
    return (
     <div>
        <h2>You are cureently logged {this.state.log ? "in":"out"}</h2>
     </div>
    )
  }
}




export default App;
