import React from 'react';
import NotifCard from './NotifCard';

const NotifCardList = ( {groups} ) =>
{
	const cardArray = groups.map((grp,i) => {
		return (
			<NotifCard 
				fromgname={grp.fromgname} 
				tousername={grp.tousername}
				/>
		);
	});
	return(
		<div>
			{cardArray}
		</div>
	);
}

export default NotifCardList;
