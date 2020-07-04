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

  //Changing the state on button click
  //setState is the method provided to us by Component class
  //This method with merge the state provided to it with the existing state.
  buttonClickHandler = () =>{
    this.setState({
      persons: [
        {name: 'Rajesh', age:31},
        {name: 'Priya', age: 27}
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br></br>
        <button onClick={this.buttonClickHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
        <Human nationality = 'African'/>
      </div>
    );
  }
}

export default App;
