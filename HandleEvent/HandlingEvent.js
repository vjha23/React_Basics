import React from 'react'

function handleClick(){
    alert("Im clicked!!")
}


function Handling(){
    return(
        <div>
            <img onMouseOver={()=>{alert("im hovered!")}} src="https://www.fillmurray.com/200/100"></img>
            <br></br>
            <br></br>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
export default Handling;