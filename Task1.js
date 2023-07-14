import React, { useState } from 'react';

function Task1() {
  const [counter, setCounter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('yellow');

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setBackgroundColor(getRandomColor());
  };

  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div>
      <h1>Task 1</h1>
      <div
        className="circle"
        style={{ backgroundColor: backgroundColor }}
      >
        <p className="counter">{counter}</p>
      </div>
      <p>Background Color: {backgroundColor}</p>
      <button onClick={increaseCounter}>Increase Counter</button>
    </div>
  );
}

export default Task1;
