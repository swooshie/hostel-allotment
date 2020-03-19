import React from 'react';
import Member from './Photos/Member.png';
import Leader from './Photos/Leader.png';

class Roles extends React.Component{
	hist=()=>{
		console.log('hi');
	}
	render()
	{
		return(
			<div>
				<legend className="f1 fw6 ph0 mh0 just">Hello...{this.props.username}<br></br> Find your new home.</legend>
				<legend className="f3 fw6 ph0 mh0 justifyNobackg"><br></br>Click on your role<br></br></legend>
					<br></br>
				<center>
					<figure class="figure">
					  <img src={Leader} class="imgleader hi" onClick={this.hist} />
					  <figcaption class="figure-caption f4">Leader</figcaption>
					</figure>
					<figure class="figure">
					  <img src={Member} class="imgleader hi" onClick={this.hist} />
					  <figcaption class="figure-caption f4">Group Member</figcaption>
					</figure>
				</center>
			</div>
		);
	}
}				

export default Roles;