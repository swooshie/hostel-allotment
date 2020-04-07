import React from 'react';
import Member from './Photos/Member.png';
import Leader from './Photos/Leader.png';
import Profile from './Profile';

var username='';

class Roles extends React.Component{
	constructor()
	  {
	    super();
	    this.state={
	      username:'',
	      distributed:false
	    }
	  }

	  onSet=(event)=>{
    this.setState({distributed:true});
  }

	  setLeader=(event)=>{
	 	console.log('username is',username);
	   fetch('http://localhost:5000/setLeader',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username:username
      })
    }).then(res=>res.json())
      .then((res)=>{
      	alert('Your role has been set to Group Leader!!')
        this.onSet();
      })
      .catch(err=>console.log);
      
	}	

	 setMember=(event)=>{
	 	console.log('username is',username);
	   fetch('http://localhost:5000/setMember',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username:username
      })
    }).then(res=>res.json())
      .then((res)=>{
      	alert('Your role has been set to Group Member!!')
      	this.onSet();        
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
			{
					this.state.distributed===false ?
					<div>
					<legend className="f1 fw6 ph0 mh0 just">Hello...{this.props.username}<br></br> Find your new home.</legend>
					<legend className="f3 fw6 ph0 mh0 justifyNobackg"><br></br>Click on your role<br></br></legend>
						<br></br>
					<center>
						<figure class="figure">
						  <img onClick={this.setLeader} src={Leader} class="imgleader hi" alt="Leader" />
						  <figcaption class="figure-caption f4">Leader</figcaption>
						</figure>
						<figure class="figure">
						  <img onClick={this.setMember} src={Member} class="imgleader hi" alt="Member" />
						  <figcaption class="figure-caption f4">Group Member</figcaption>
						</figure>
					</center>
				</div>
				:
				<Profile />
				}
			</div>
		);
	}
}				

export default Roles;