import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import Human from './Person/Human'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Person name = 'Ronit' age = '24'/>
        <Person name = 'Ash' age = '22'/>
        <Human nationality = 'African'/>
      </div>
    );
  }
}

export default App;
