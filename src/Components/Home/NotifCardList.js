import React from 'react';
import NotifCard from './NotifCard';

const NotifCardList = ( {groups} ) =>
{
	const cardArray = groups.map((grp,i) => {
		return (
			<NotifCard 
				fromgname={groups[i].fromgname} 
				tousername={groups[i].tousername}
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
