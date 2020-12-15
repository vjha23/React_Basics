import React from 'react';


function JokeComponent(props){
    console.log(props)
    return (
        <div >
        <h2 style={{display:props.question ?"block" : "none"}}>Question:{props.question}</h2>
        <h2>Answer:{props.punchline}</h2>
        </div>
    )
}

export default JokeComponent;