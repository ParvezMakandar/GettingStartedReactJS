import logo from './BridgeLabz.jpg';
import './App.css';
import React from 'react';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      title: 'Hello From Bridgelabz'
    }
  }
  render(){
    return(
      <div>
        <h1> {this.state.title}</h1>
        <img src={logo} 
        alt="The Bridgelabz logo"/>
      </div>
    )
  }
}

export default App;
