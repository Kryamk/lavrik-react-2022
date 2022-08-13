import React from 'react';
import ReactDom from 'react-dom';

import UserCard from './UserCard';
import CounterClass from './CounterClass';
import CounterFn from './CounterFn';





ReactDom.render(
	<div className="some">
		<h1>Hello World!!!</h1>
		<hr />
		<h2>UserCard.js</h2>
		<UserCard name="Ivan" text="Hi there!" title="title555" />
		<UserCard name="Anny" text="Hi there!" />
		<UserCard name="Kryamk" text="Hi there!" />

		<br /><hr />
		<h2>CounterClass.js</h2>
		<h3>Class min=1 max=3</h3>
		<CounterClass max={3} min={1} test1= "foo" test2 = {555} test3 = {true} />

		<br /><hr />
		<h2>CounterFn.js</h2>
		<h3>Fn min=20 max=50</h3>
		<CounterFn max={50}/>
		{/* <CounterFn max="5"/> */}
		{/* <CounterFn/> */}






		<br /><hr />
		<div>Footer</div>
	</div>,
	document.querySelector('.app')
);
