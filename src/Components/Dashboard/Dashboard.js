import React from 'react';
import { Form }from 'react-bootstrap';
import {Switch,Link,Route,BrowserRouter as Router} from 'react-router-dom';
import './dashboard.css';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Notifications from '../Notifications/Notifications';
import Groups from '../Groups/Groups';

class Dashboard extends React.Component{
	printUsername=()=>{
		console.log('hi this is',this.props.username);
	}
	render()
	{
		return(
			<Router>

			  <nav className="navbar navbar-dark navito">
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <Form inline>
			    <label className="ptr db fw6 lh-copy white f3 navito b--transparent justify-content-end">{this.props.username}</label>
			    <button className="ptr db fw6 lh-copy white f3 navito b--transparent ">Logout</button>
			  	</Form>
			  </nav>
			<div className="pos-f-t">
			  <div className="collapse" id="navbarToggleExternalContent">
			    <div className=" p-4 navito">
			    <br></br>
			    <Link to="/dashboard" >
			      <button className="ptr db fw6 lh-copy white f3 navito b--transparent ">Home   </button>
			    </Link> 
			    <br></br>
			    <Link to="/layout" >
			      <button className="ptr db fw6 lh-copy f3 white navito b--transparent ">Layout </button>
			    </Link>
			    <br></br>
			    <Link to="/notifications" >
			      <button className="ptr db fw6 lh-copy f3 white navito b--transparent ">Notifications </button>
			    </Link>
			    <br></br>
			    <Link to="/groups" >
			      <button onClick={this.printUsername()} className="ptr db fw6 lh-copy white f3 navito b--transparent ">Groups   </button>
			    </Link>
			    </div>
			  </div>
			 
			  
			  	<Switch>
				  	<Route path="/layout" exact component={Layout}/>
				  	<Route path="/notifications" exact component={Notifications}/>
				  	<Route path="/dashboard" component={Home}/>
				  	<Route path="/groups" component={Groups}/>
			  	</Switch>
			  
			  
			</div>
			</Router>
			);
	}
}

export default Dashboard;
