import React, { Component } from 'react';
import CardList from '../CardList/CardList';
import { groups } from '../Data/GroupList';
import SearchBox from '../SearchBox';

class Group extends Component{
	constructor()
	{
		super();
		this.state ={
			grps:groups,
			searchField:''
		}
	}

	// componentDidMount(){
	// 	fetch('http://jsonplaceholder.typicode.com/users')
	// 	.then(response=>response.json())
	// 	.then(users=>this.setState({ robots:users}));
	// }

	onSearchChange = (event) =>{
		this.setState({ searchField: event.target.value});
	}

	render(){
			const {grps,searchField}= this.state;
			const filteredGroups = grps.filter(groups =>{
			return groups.gname.toLowerCase().includes(searchField.toLowerCase());
			});
			return(
				<div className='tc'>
				<h1 className={`f1 tc`}>Groups</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<CardList groups = { filteredGroups }/>
				</div>
		);
	}
}

export default Group;