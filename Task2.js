import React, { useState } from 'react';
import axios from 'axios';

function Task2() {
  const [circles, setCircles] = useState([
    { id: 1, counter: 0, backgroundColor: 'yellow' },
  ]);

  const addCircle = () => {
    if (circles.length < 10) {
      const newCircle = {
        id: circles.length + 1,
        counter: 0,
        backgroundColor: 'yellow',
      };
      setCircles((prevCircles) => [...prevCircles, newCircle]);
    }
  };

  const duplicateCircle = (id) => {
    if (circles.length < 10) {
      const duplicate = circles.find((circle) => circle.id === id);
      if (duplicate) {
        const newCircle = {
          id: circles.length + 1,
          counter: 0,
          backgroundColor: duplicate.backgroundColor,
        };
        setCircles((prevCircles) => [...prevCircles, newCircle]);
      }
    }
  };

  const increaseCounter = (id) => {
    setCircles((prevCircles) =>
      prevCircles.map((circle) =>
        circle.id === id
          ? { ...circle, counter: circle.counter + 1 }
          : circle
      )
    );
  };

  return (
    <div>
      <h1>Task 2</h1>
      <div className="circle-container">
        {circles.map((circle) => (
          <div className="circle" key={circle.id}>
            <p className="counter">{circle.counter}</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={addCircle}>Add Circle</button>
      </div>
      <div>
        <button
          onClick={() => duplicateCircle(circles[circles.length - 1].id)}
        >
          Duplicate Circle
        </button>
      </div>
      <div>
        {circles.length > 0 && (
          <p>Number of Circles: {circles.length}</p>
        )}
      </div>
      <div>
        {circles.length > 0 && (
          <button
            onClick={() => {
              const numberOfCircles = circles.length;
              axios
                .get(
                  `https://random-data-api.com/api/users/${numberOfCircles}`
                )
                .then((response) => {
                  const usersData = response.data;
                  console.log(usersData);
                })
                .catch((error) => {
                  console.error(error);
                });
            }}
          >
            Fetch Users
          </button>
        )}
      </div>
    </div>
  );
}

export default Task2;
