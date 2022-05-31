import React from 'react';

function UserCard(props) {
	// function UserCard( {name, text } ) { // с деструкторизацией
	// console.log('---', props);
	return (
		<div className="card">
			<h3>{props.name} --- {props.text}</h3>
		</div>
	)
}

export default UserCard;
