import React, {Component} from 'react';

import './Home.css';
import Roles from './Roles.js';

class Home extends Component{
	
	render(){
		return(
			<div>
				{
					<Roles />
				}
			</div>
		);
	}
}
export default Home;