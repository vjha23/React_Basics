import React, { Component } from 'react';

class StateChange extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
        this.handleClicked=this.handleClicked.bind(this);
    }

     handleClicked() {
       this.setState(prevState=>{
           return{
                count:prevState.count+1
           }
       })
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClicked}>Change</button>
            </div>
        )
    }
}
export default StateChange;