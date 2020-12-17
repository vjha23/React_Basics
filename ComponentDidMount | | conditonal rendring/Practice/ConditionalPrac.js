import React, { Component } from 'react';

class ConditionalPrac extends Component{
    constructor(){
        super();
        this.state={
            isLoggedIn:false
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState=>{
            return{
                isLoggedIn:!prevState.isLoggedIn
            }
        })
    }

    render(){
        let buttonText=this.state.isLoggedIn?"Log Out":"Log In"
        let DisplayText=this.state.isLoggedIn?"User is Logged In":"User Logged Out"
        return(
            <div>
               <h1>{DisplayText}</h1>
               <button onClick={this.handleClick}>{buttonText}</button>  
            </div>
        )
    }

}



export default ConditionalPrac;