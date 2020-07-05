import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import Human from './Person/Human'

//Functional Component demonstrating the useState Hook
const app = (props) => {

  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Manjeet', age: 28},
      {name: 'Max', age: 25}
    ]
  })

  //Changing the state on button click
  const buttonClickHandler = (newName) =>{
    setPersonState({
      persons: [
        {name: newName, age:31},
        {name: 'Priya', age: 27}
      ]
    })
  }

  const nameChangedHandler = (event) => {
    setPersonState({
      persons: [
        {name: event.target.value, age:31},
        {name: 'Priya', age: 27}
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    border: '1px solid blue',
    padding: '8px'
  }

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br></br>
        <button
        style = {style} 
        onClick = {() => buttonClickHandler('Howard !!')}>
          Switch Name
        </button>
        <Person 
        name = {personState.persons[0].name} 
        age = {personState.persons[0].age} 
        changed = {nameChangedHandler}  />
        <Person 
        name = {personState.persons[1].name} 
        age = {personState.persons[1].age} 
        click = {buttonClickHandler.bind(this,'Sheldon !!!')}/>
        <Human nationality = 'African'/>
      </div>
    );
}

export default app;
