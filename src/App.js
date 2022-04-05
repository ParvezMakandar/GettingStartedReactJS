import logo from './BridgeLabz.jpg';
import './App.css';
import React from 'react';



class App extends React.Component{
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      title: 'Hello From Bridgelabz'
    }
    this.state = {
       userName: '' 
    }
  }

  // OnClick function
  onClick = ($event) =>{
    console.log("save button is clicked", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("the value is", event.target.value);
    const nameRagex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState( {userName: event.target.value})
    if(nameRagex.test(event.target.value)) {
      this.setState({nameError: ''})
    } else
    {
      this.setState({ nameError: 'Name is Incorrect'})
    }    
  }

  render(){
    return(
      <div>
      <div>
        <h1> {this.state.title}</h1>
        <h1> Hello {this.state.userName} from Bridgelabz</h1>
        <img src={logo} onClick={this.onClick}
        alt="The Bridgelabz logo"/>
      </div>
      <div>
        <input onChange={this.onNameChange} />
        <span className="error-output"> {this.state.nameError} </span>
      </div>
      </div>
    );
  }
}

export default App;
