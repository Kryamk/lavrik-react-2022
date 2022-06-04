import React from 'react';

function UserCard(props) {
	// function UserCard( {name, text } ) { // с деструкторизацией
	// export default function ( {name, text} ) // экспорт анонимной функции
	// console.log('---', props);
	return (
		<div className="card">
			<h3>{props.name} --- {props.text}</h3>
		</div>
	)
}

export default UserCard;
