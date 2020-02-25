import React, {Component} from 'react';
import Dashboard from './Components/Dashboard';
import SignIn from './Components/SignIn';
import Register from './Components/Register';

import './App.css';



class App extends Component{
  constructor()
  {
    super();
    this.state={
      route:'signin',
      isSignedIn:'false',
    }
  }
  
  onRegister=(event)=>{
    this.setState({route:'register'});
  }

  Back=(event)=>{
    this.setState({route: 'signin'});
  }

  onSignIn=(event)=>{
    this.setState({route:'registered'});
  }

  render(){
      return (
          <div>
          {
            this.state.route==='register'?  <Register Back={this.Back}/>
            :
              this.state.route==='registered'? <Dashboard />
            :
              <SignIn onRegister={this.onRegister} onSignIn={this.onSignIn} />
            }
           
          </div>
          
      );
  };
}

export default App;
