import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      name:"Vijay Jha",
      age:20
    }
  }
  render(){
    return (
     <div>
        <h1>{this.state.name}</h1>
        <h2>Im {this.state.age} years old</h2>
       
     </div>
    )
  }
}




export default App;
