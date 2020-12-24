import React, { Component } from 'react';

class FormEx extends Component{
    constructor(){
        super();
        this.state={
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
           
            destination:false,
            isVegan:false,
            isKosher:false,
            isLactoseFree:false
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
                onChange={this.handleChange}
                
                />
                <br></br>
                <input type="text"
                    name="lastName"
                    value={this.state.lastName}
                    placeholder="Last Name"
                    onChange={this.handleChange}

                />
                <br></br>
                <input type="text"
                    name="age"
                    value={this.state.age}
                    placeholder="Age"
                    onChange={this.handleChange}
                
                />
                <br></br>
                <label>
                    <input type="radio"
                        name="gender"
                        value="Male"
                        checked={this.state.gender==="Male"}
                        onChange={this.handleChange}
                    />Male
                </label>
                <br></br>
                    <input type="radio"
                        name="gender"
                        value="Female"
                        checked={this.state.gender==="Female"}
                        onChange={this.handleChange}
                    />Female
                <br></br>
                <label>Favorite Destination</label>
                <select name="destination"
                        value={this.state.destination}
                        onChange={this.handleChange}
                >
                    <option value="">Choose</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
                <br></br>
                    <label>
                    <input type="checkbox"
                            name="isVegan"
                            checked={this.state.isVegan}
                            onChange={this.handleChange}
                    />Vegan?
                    </label>
                    <br></br>
                    <label>
                    <input type="checkbox"
                            name="isLactoseFree"
                            checked={this.state.isLactoseFree}
                            onChange={this.handleChange}
                    />LactoseFree?
                    </label>
                    <br></br>
                    <label>
                    <input type="checkbox"
                            name="isKosher"
                            checked={this.state.isKosher}
                            onChange={this.handleChange}
                    />Kosher?
                    </label>
                <br></br>
                <button>Submit</button>
                </form>
                <br></br>
                <br></br>
                <h1>Entered Information</h1>
                <h3>Your Name {this.state.firstName} {this.state.lastName}</h3>
                <h3>Your Age {this.state.age}</h3>
                <h3>Your Gender {this.state.gender}</h3>
                <h3>Your Destination {this.state.destination}</h3>
                <h3>DiertaryRestriction</h3>
                <p>Vegan? {this.state.isVegan?"Yes":"No"}</p>
                <p>Kosher? {this.state.isKosher?"Yes":"No"}</p>
                <p>LactoseFree?{this.state.isLactoseFree?"Yes":"No"}</p>


            </div>
        )
    }
}
export default FormEx;