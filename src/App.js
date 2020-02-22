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
    this.setState({isSignedIn:'true'});
  }

  render(){
      return (
        <div>
          
          {this.state.route==='signin'?
            <div>
            <SignIn onRegister={this.onRegister} onSignIn={this.onSignIn} />
            {this.state.isSignedIn==='true'?console.log('hi')
              :
              console.log('hi')}
            </div>
            :
            <Register Back={this.Back}/>
          }
         </div>  
      );
  };
}

export default App;
