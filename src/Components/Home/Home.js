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
				<legend className="f3 fw6 ph0 mh0 justifyNobackg"><br></br>Click on your role<br></br></legend>
				<br></br>
				<center>
				<figure class="figure">
				  <img src="https://cdn.lynda.com/course/160362/160362-637163430552329914-16x9.jpg" class="imgleader hi" onClick={this.hist} />
				  <figcaption class="figure-caption f4">Leader</figcaption>
				</figure>
				<figure class="figure">
				  <img src="https://katemunden.com/wp-content/uploads/2015/05/Group-Avatar-2.png" class="imgleader hi" onClick={this.hist} />
				  <figcaption class="figure-caption f4">Group Member</figcaption>
				</figure>
				
				</center>
				
			</div>
		);
	}
}
export default Home;