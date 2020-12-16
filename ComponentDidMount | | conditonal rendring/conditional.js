import React, { Component } from 'react'
import CondtionalComp from './components/CoditionalComp'

class Conditional extends Component{
    constructor(){
        super()
        this.state={
            isLoading:true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },3000)
    }

    render(){
        return(
            <div>
                {this.state.isLoading?
                <h1>Loadingg....</h1>:
                <CondtionalComp />}
            </div>
        )
    }
}
export default Conditional;