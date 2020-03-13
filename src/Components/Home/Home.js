import React, {Component} from 'react';
import '../Data/users';
import './Home.css';

class Home extends Component{
	hist=()=>{
		console.log('hi');
	}
	render(){
		return(
			<div>
				<legend className="f1 fw6 ph0 mh0 just">Hello...{this.props.username}<br></br> Find your new home.</legend>
				<legend className="f4 fw6 ph0 mh0 justifyNobackg"><br></br>Choose your role:group leader/member<br></br></legend>
				<br></br><br></br><br></br>
				<center>
				<img src='https://cdn.lynda.com/course/160362/160362-637163430552329914-16x9.jpg' className="imgleader hi" onClick={this.hist}/ > 
				<img src='https://katemunden.com/wp-content/uploads/2015/05/Group-Avatar-2.png' className="imgleader " onClick={this.hist}/ > 
				</center>
				
			</div>
		);
	}
}
export default Home;