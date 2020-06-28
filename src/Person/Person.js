import React from 'react'

//This type of Component is also known as React Hooks or Fucntion based Component
//Each component has a props object which is made available to it by react itself
//Although we can give it any name, however props is preferred as it is universally used and increases code readability
const Person = (props) =>{
return <p>Hi, My name is {props.name} and I'm {props.age} years old !!</p>
}

export default Person;