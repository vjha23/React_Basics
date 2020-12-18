import React, { Component } from 'react';

class FetchApi extends Component{
    constructor(){
        super();
        this.state={
            loading:false,
            characters:{}
        }
    }
    componentDidMount(){
        this.setState({loading:true})

        fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data =>{
            this.setState({
                characters:data,
                loading:false
            })
        })
    }

    render(){
        const text=this.state.loading?"Loading..":this.state.characters.name
        return(
            <div><h1>{text}</h1></div>
        )
    }
}
export default FetchApi;