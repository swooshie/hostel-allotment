import React from 'react';
import {Switch,Link,Route,BrowserRouter as Router} from 'react-router-dom';
import './dashboard.css';
import Home from './Home';
import Layout from './Layout';
import Notifications from './Notifications';

class Dashboard extends React.Component{
	render()
	{
		return(
			<Router>
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
			    </div>
			  </div>
			  
			  <nav className="navbar navbar-dark navito">
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			  </nav>
			  
			  	<Switch>
				  	<Route path="/layout" exact component={Layout}/>
				  	<Route path="/notifications" exact component={Notifications}/>
				  	<Route path="/dashboard" component={Home}/>
			  	</Switch>
			  
			  
			</div>
			</Router>
			);
	}
}

export default Dashboard;
