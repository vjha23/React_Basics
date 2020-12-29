import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "VijayKant Jha",
    age: 21,
    message: 'random message'
  })
  const changeMessage = () => {
    if (person.message === 'random message') {
      setPerson({ ...person, message: 'you will got the job man!!' });
    } else {
      setPerson({ ...person, message: 'random message' })
    }
  }
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
          </button>

    </React.Fragment>
  )

};

export default UseStateObject;
