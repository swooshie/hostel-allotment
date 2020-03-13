import React, {Component} from 'react';
import '../Data/users';
import './Home.css';

class Home extends Component{
	render(){
		return(
			<div>
				<legend className="f1 fw6 ph0 mh0 just">Hello...<br></br> Find your new home.</legend>
				<legend className="f4 fw6 ph0 mh0 justifyNobackg"><br></br>Choose your role:group leader/member<br></br></legend>
				<br></br><br></br><br></br><br></br>
				<center>
				 <input type="button" onclick={this.learder} className="imgleader" />
				<img src='https://katemunden.com/wp-content/uploads/2015/05/Group-Avatar-2.png' className="imgleader "/ > 
				</center>
				
			</div>
		);
	}
}
export default Home;