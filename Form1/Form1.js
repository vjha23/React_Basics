import React, { Component } from 'react'

class Form1 extends Component{
    constructor(){
        super();
        this.state={
            firstName:"",
            lastName:""
        }
        this.handleChange=this.handleChange.bind(this);
    }
handleChange(event){
    this.setState({
        [event.target.name] : event.target.value
    })
}
    render(){
        return(
            <div>
                <input type="text"
                name="firstName"
                value={this.state.firstName}
                placeholder="First Name"
                onChange={this.handleChange}>
                </input>


                <input type="text" 
                name="lastName"
                value={this.state.lastName} 
                placeholder="last Name" 
                onChange={this.handleChange}></input>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </div>
        )
    }
}
export default Form1;