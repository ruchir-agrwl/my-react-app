import React from 'react'
import './Person.css'

//This type of Component is also known as React Hooks or Fucntion based Component
//Each component has a props object which is made available to it by react itself
//Although we can give it any name, however props is preferred as it is universally used and increases code readability
const Person = (props) =>{
return (
    <div className = "Person">
        <p onClick = {props.click}>Hi, My name is {props.name} and I'm {props.age} years old !!</p>
        <input type="text" onChange = {props.changed} value = {props.name}/>
    </div>
)
}

export default Person;