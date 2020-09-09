import React, { useState, useEffect } from 'react';

const TOTAL_USERS = 5;

const Exercise01 = () => {
  const [users, setUsers] = useState([]); // useState is a hook that returns the current state value and a function that lets you update it.
  // The objective here is to change the initial state of users to another one where it has the users' data from the API.

  /* THE FIX STARTS HERE */

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(data => {
        let limit = data.length;
        let users = [];

        if(data.length > TOTAL_USERS){
          limit = TOTAL_USERS;
        }
        
        for (let i = 0; i < limit; i++) {
          users = [...users, data[i]];         
        }
        return users;        
      })
      .then(users =>
        setUsers(users) // setUsers replaces the empty array with the data in the state variable, users.
      ); 
    }, []); // With useEffect we can mount the component with the pertinent data.


  /* THE FIX ENDS HERE */

  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>We are currently trying to render the first 5 users we obtain from a REST API. The problem is that, for some reason, it's only rendering one of them. Another thing we've noticed is that, sometimes, it renders different user.</p>

      <p>
        <strong>TODO:</strong>
        <ul>
          <li>Fetch and Render the first 5 users</li>
          <li>Make sure the order is ascendant by ID</li>
        </ul>
      </p>

      <hr className="my-5" />

      <h3>Users</h3>

      <ul className="list-group">
        {users.map(user => <li key={`user-${user.id}`} className="list-group-item">
          <strong>ID:</strong> {user.id} - <strong>Name:</strong> {user.name} <strong>Email:</strong> {user.email}
        </li>)}
      </ul>

    </div>
  );
};

export default Exercise01;
