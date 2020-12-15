import React from 'react';
import JokeComponent from './components/joke';
import jokesData from './components/jokesdata';
import './style.css';

function Joke(){
  const jokeComponents =  jokesData.map(joke_=>
         <JokeComponent key={joke_.id}  question={joke_.question} punchline={joke_.punchline}/>
    )



    return(
        <div className="jokes_body">
         
        {jokeComponents}

        </div>
    )
}

export default Joke;