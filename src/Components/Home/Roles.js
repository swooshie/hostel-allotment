import React from 'react';
import Member from './Photos/Member.png';
import Leader from './Photos/Leader.png';

var username='';

class Roles extends React.Component{
	constructor()
	  {
	    super();
	    this.state={
	      username:'',
	    }
	  }

	 async setLeader(event){
	 	console.log('username is',username);
	  await fetch('http://localhost:5000/setLeader',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username:username
      })
    }).then(res=>res.json())
      .then((res)=>{
        console.log(res);
        console.log('hello');
      })
      .catch(err=>console.log);
	}	

	async setMember(event){
	 	console.log('username is',username);
	  await fetch('http://localhost:5000/setMember',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username:username
      })
    }).then(res=>res.json())
      .then((res)=>{
        console.log(res);
        console.log('hello');
      })
      .catch(err=>console.log);
	}

	componentDidMount(){
		console.log('Username is',this.props.username)
		console.log('Role is',this.props.role)
		this.setState({username:this.props.username});
		username=this.props.username;
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
					  <img onClick={this.setLeader} src={Leader} class="imgleader hi"/>
					  <figcaption class="figure-caption f4">Leader</figcaption>
					</figure>
					<figure class="figure">
					  <img onClick={this.setMember} src={Member} class="imgleader hi"/>
					  <figcaption class="figure-caption f4">Group Member</figcaption>
					</figure>
				</center>
			</div>
		);
	}
}				

export default Roles;