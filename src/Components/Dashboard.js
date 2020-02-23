import React from 'react';
import './dashboard.css';

class Dashboard extends React.Component{
	render()
	{
		return(
			<div className="pos-f-t">
			  <div className="collapse" id="navbarToggleExternalContent">
			    <div className=" p-4 navito">
			    <br></br>
			      <button className="ptr db fw6 lh-copy white f3 navito b--transparent ">Home   </button>
			    <br></br>
			      <button className="ptr db fw6 lh-copy f3 white navito b--transparent ">Layout </button>
			    <br></br>
			      <button className="ptr db fw6 lh-copy f3 white navito b--transparent ">Notifications </button>
			    
			    </div>
			  </div>
			  <nav className="navbar navbar-dark navito">
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			  </nav>
			  <legend className="f1 fw6 ph0 mh0 just">Hello...<br></br> Find your new home.</legend>
			</div>
			);
	}
}

export default Dashboard;
