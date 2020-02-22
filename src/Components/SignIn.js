import React from 'react';
import database from './users';
import Particles from 'react-particles-js';
import './SignIn.css';


const particlesOptions={
  particles: {
    number:{
      value: 100,
      density:{
        enable: true,
        value_area: 800
      },
    line_linked:{
      color:'#000000',
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

class SignIn extends React.Component {
	constructor(){
		super();
		this.state={
			username:'',
			password:'',
		}
	}

	onUsernameChange=(event)=>{
		this.setState({username:event.target.value});
	}

	onPasswordChange=(event)=>{
		this.setState({password:event.target.value});
	}

	onSuccessfull=(event)=>{
		this.props.onSignIn();
	}

	checkUser=(event)=>{
		var flag=0;
		// console.log(database.users[0].username);
		for(var i=0;i<database.users.length;i++)
		{
			if(database.users[i].username===this.state.username)
			{
				if(database.users[i].password===this.state.password)
				{
					flag=1;
					this.props.onSignIn();
				}
			}
		}
		if(flag===0)
		{
			alert('Incorrect combination');
			
		}

		/*
				Abhi doosre page pe bhejna baaki hai agle sprint mein karenge! Samjha??
		*/
	}

	render(){
		return(
			<div>
				<Particles className='me particles'
            params={particlesOptions} 
          />
      			<div>
      			<article className="br4 ba us dark-gray b--white-30 mv4 w-200 w-50-m w-25-1 mw6 center shadow-5 bg-transparent">
      			<main className="pa4 white-80">
      			  <div className="measure">
      			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
      			      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
      			      <div className="mt3">
      			        <label className="db fw6 lh-copy f3" for="username">Username</label>
      			        <input onChange={this.onUsernameChange} className="pa2 b--white-20 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" />
      			      </div>
      			      <div className="mv3">
      			        <label className="db fw6 lh-copy f3" for="password">Password</label>
      			        <input onChange={this.onPasswordChange} className="b pa2 b--white-20 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
      			      </div>
      			    </fieldset>
      			    <div className="flex justify-around">
      			      <input onClick={this.checkUser} className="b ph3 pv2 white input-reset ba b--white-20 bg-transparent grow pointer f4 dib" type="submit" value="Sign in" />
      			    	<input onClick={this.props.onRegister} className="b ph3 pv2 white input-reset ba b--white-20 bg-transparent grow pointer f4 dib" type="submit" value="Register" />
      			    </div>
      			  </div>
      			</main>
      			</article>
      		</div>
      </div>
		);
	}
}
export default SignIn;