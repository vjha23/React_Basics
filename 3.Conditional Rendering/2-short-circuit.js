import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <React.Fragment>
      <h1>{text || 'Vijayy'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>Thre is an error</p>
      ) : (
          <div>
            <h2>no errorrrr</h2>
          </div>
        )
      }
    </React.Fragment>
  )
};

export default ShortCircuit;
