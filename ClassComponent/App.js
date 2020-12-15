import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render(){
    return (
     <div>
        <Header username="Vijay"/>
        <Greeting/>
     </div>
    )
  }
}

class Header extends Component{
  render(){
    return(
      <header>
          <p>Welcome, {this.props.username}</p>
      </header>
    )
  }
}

class Greeting extends Component{
  render(){
    const date=new Date();
    const hours=date.getHours();
    let timeofdays;
    
           if(hours<12){
              timeofdays="morning"
           }else if(hours>=12 && hours<17){
             timeofdays="Afternoon"
           }else{
             timeofdays="Night!"
           }
      return(
        <h1>Good {timeofdays} to you Sir or mada,! </h1>
     )
  }
}


export default App;
