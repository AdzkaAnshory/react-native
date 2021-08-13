import React, { Component } from 'react';
import HomeScreen from './src/screens/HomeScreen.js';
import Login from "./src/screens/LoginScreen.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page : "login"
     }
  }

  setScreen = screen => {
    this.setState({
      page : screen
    })
  }

  renderedScreen = () => {
    if(page === "login")
      return <Login setScreen={this.setScreen}/>
    
    if(page === "home")
      return <HomeScreen />
  }

  render() { 
    return ( 
      <>
      {this.renderedScreen()}
      </>

     );
  }
}
 
export default App;