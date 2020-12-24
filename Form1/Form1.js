import React, { Component } from 'react'

class Form1 extends Component{
    constructor(){
        super();
        this.state={
            firstName:"",
            lastName:"",
            isfriendly:false,
            gender:"",
            favColor:""
        }
        this.handleChange=this.handleChange.bind(this);
    }
handleChange(event){
    const {name,value,type,checked}=event.target
    type==="checkbox"?
    this.setState({
        [name]:checked
    })
    :  
    this.setState({
        [name]:value
    })
}
    render(){
        return(
            <div>
            <form>
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
               

                <textarea value={"Some Default value"}
                onChange={this.handleChange}
                />
                <br/>

                <label>
                <input type="checkbox"
                        name="isfriendly"
                        checked={this.state.isfriendly}
                        onChange={this.handleChange}
                />isFriendly?
                </label>

                <label>
                <input type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender==="male"}
                        onChange={this.handleChange}
                />Male
                </label>

                <label>
                <input type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender==="female"}
                        onChange={this.handleChange}
                />Female
                </label>
                <br></br>

                <label>Favorite Color</label>
                <select value={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor"
                >
                    <option value="red">Red</option>
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>

                </select>
                

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your fav color is {this.state.favColor}</h2>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form1;