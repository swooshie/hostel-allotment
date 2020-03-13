import React, {Component} from 'react';
import {Dropdown,DropdownButton} from 'react-bootstrap';
import Slide from './Slide';
import './Layout.css';
class Layout extends Component{
	render(){
		return(
			<div>
			<br></br>
			<div>
				<Slide />
			</div>
			</div>

		);
	}
}
export default Layout;