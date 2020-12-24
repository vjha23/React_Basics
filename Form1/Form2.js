import React, { Component } from 'react';

class Form2 extends Component{
    constructor(){
        super();
        this.state={
            firstName:"",
            lastName:"",
            isFriendly:false,
            gender:"",
            favColor:""
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
        const {name,value,type,checked}=event.target;
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
                            onChange={this.handleChange} >
                    </input>

                    <input type="text"
                            name="lastName"
                            value={this.state.lastName}
                            placeholder="Last Name"
                            onChange={this.handleChange}
                    ></input>

                    <br></br>
                    <br></br>
                    <textarea value={"Some Deafault Value"}></textarea>
                    <br></br>
                    <br></br>
                    <label>
                        <input type="checkbox"
                                name="isFriendly"
                                checked={this.state.isFriendly}
                                onChange={this.handleChange}
                        
                        /> IsFriendly?
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        <input type="radio"
                                name="gender"
                                value="male"
                                checked={this.state.gender==="male"}
                                onChange={this.handleChange}
                        />
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        <input type="radio"
                                name="gender"
                                value="female"
                                checked={this.state.gender==="female"}
                                onChange={this.handleChange} 
                        
                        />
                    </label>
                    <br></br>
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
                    <button>Submit</button>
                </form>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are {this.state.gender}</h2>
                <h2>Your fav color is {this.state.favColor}</h2>
            </div>
        )
    }
}
export default Form2;