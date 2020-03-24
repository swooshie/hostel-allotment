import React from 'react';
import './notifcard.css';

const NotifCard =({ fromgname,tousername }) => {
	return(
		<div className="cardbg tc dib br3 pa3 ma2 grow bw2 shadow-5">
			{/*<img alt = "This a photu!" src = "https://robohash.org/${fromgname}?200x200" />*/}
			<div>
				<h2>fromgname:{fromgname}</h2>
				<h2>tousername:{tousername}</h2>
			</div>
		</div>
	);
}

export default NotifCard;