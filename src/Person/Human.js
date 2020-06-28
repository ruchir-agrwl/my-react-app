import React, {Component} from 'react'

//This type of Component is also known as Class based Components
//Like Functional Component, Class based component also has a object which is made available to it by default from react
//We cab=n access that object by using this keyword as shown below
class Human extends Component{
    render(){
        return(<p>I am Human Component and my nationality is {this.props.nationality} !!</p>)
    }
}

export default Human;
