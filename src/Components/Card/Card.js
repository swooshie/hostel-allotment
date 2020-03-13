import React from 'react';
import './card.css';

const Card =({ name,key }) => {
	return(
		<div className="cardbg tc dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt = "This a photu!" src = "https://robohash.org/${name}?200x200" />
			<div>
				<h2>{name}</h2>
				<h3>{key}</h3>
			</div>
		</div>
	);
}

export default Card;