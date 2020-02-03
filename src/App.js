import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import './App.css';

const particlesOptions={
  particles: {
    number:{
      value: 150,
      density:{
        enable: true,
        value_area: 800
      }
    },
    move: {
      speed: 4
    }
  },
  interactivity: {
    onhover: {
      enable: true,
      mode: 'repulse',
    },
    detect_on: 'canvas'
  },
}

class App extends Component{
  
  render(){
      return (
        <div>
          <Particles className='me'
            params={particlesOptions} 
          />
          <Navigation />
          <SignIn />
          <Register />
         </div> 
      );
  };
}

export default App;
