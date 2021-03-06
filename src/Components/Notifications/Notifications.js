import React, {Component} from 'react';
import NotifCardList from '../Home/NotifCardList';

class Notifications extends Component{
	constructor()
	{
		super();
		this.state ={
			grps:[],
			role:''
		}
	}

	async componentDidMount(){
		await fetch('http://localhost:5000/getNotifsformember',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username: this.props.username
      })
    }).then((res)=>res.json())
      .then(res=>{
        this.setState({grps:res});
        console.log(res);
      })
      .catch(err=>console.log);

    await fetch('http://localhost:5000/getRole',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username: this.props.username
      })
    }).then((res)=>res.json())
      .then(res=>{
      	if(res.leader===true)
        	this.setState({role:'leader'});
        else
        	if(res.member===true)
        		this.setState({role:'member'});
        	else
        		this.setState({role:'none'});
        console.log(res);
      })
      .catch(err=>console.log);  
	}

	render()
	{
		const {grps}= this.state;
		const filteredGroups = grps;
		return(
			<div>
				{
					(()=>{
						
						if(this.state.role==='member')
							return <NotifCardList groups={filteredGroups} />
					})()
				}
			</div>
		);
	}
}
export default Notifications;