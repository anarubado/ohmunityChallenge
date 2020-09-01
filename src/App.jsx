import React from 'react';
import { Router, Link } from '@reach/router';

import Exercise01 from './exercises/Exercise01'
import Exercise02 from './exercises/Exercise02'
import Exercise03 from './exercises/Exercise03'

import './App.css';

const Welcome = () => {
  return <div>
    <h2>Welcome!</h2>
    <p>
      Please take a look at the 3 exercises, each of them contain instructions.
    </p>
  </div>
}

const NavLink = props => (
  <Link    
    {...props}  // props contain NavLink's children and the prop "to".
    getProps={({ isCurrent }) => {  // getProps is function with an object as a param. isCurrent will be true if the location.pathname is exactly the same as the anchor’s href.
      return {
        className: isCurrent ? "nav-link active" : "nav-link" // getProps will get such for an underlying anchor element.
      };
    }}
  />
  
);

const App = () => {
  return (
    <div className="container">
      <Link to="/">
        <h1 className="py-4">FrontEnd Interview Exercises</h1>
      </Link>      

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink to="/exercise01">Exercise 01</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/exercise02">Exercise 02</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/exercise03">Exercise 03</NavLink>        
        </li>
      </ul>

      <Router className="mt-5 mb-5">
        <Welcome path="/" default />
        <Exercise01 path="/exercise01" />
        <Exercise02 path="/exercise02" />
        <Exercise03 path="/exercise03" />
      </Router>

    </div>  
  )
}

export default App;
