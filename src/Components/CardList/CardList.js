import React from 'react';
import Card from '../Card/Card';

const CardList = ( {groups} ) =>
{
	const cardArray = groups.map((user,i) => {
		return (
			<Card 
				key={groups[i].grpid} 
				name={groups[i].gname}
				/>);
	});
	return(
		<div>
			{cardArray}
		</div>
	);
}

export default CardList;
