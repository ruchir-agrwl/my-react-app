import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import Human from './Person/Human'

class App extends Component {
  state ={
    persons: [
      {name: 'Manjeet', age: 28},
      {name: 'Max', age: 25}
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br></br>
        <button>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
        <Human nationality = 'African'/>
      </div>
    );
  }
}

export default App;
