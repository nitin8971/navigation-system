import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Task3({ location }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const selectedUser = location.state.selectedUser;
    // Make API call to fetch user details using the selectedUser ID
    // Set the user data to the "user" state variable
  }, [location.state.selectedUser]);

  if (!user) {
    return <p>Loading user details...</p>;
  }

  return (
    <div>
      <h1>Task 3</h1>
      <div>
        <p>ID: {user.id}</p>
        <p>Full Name: {user.full_name}</p>
        <p>Avatar: {user.avatar}</p>
        <p>Title: {user.title}</p>
      </div>
      <div>
        <Link to="/task2">Back to Task 2</Link>
      </div>
    </div>
  );
}

export default Task3;
