import React from 'react'
import ReactDom from 'react-dom';

import UserCard from './UserCard';
import CounterClass from './CounterClass';
import CounterFn from './CounterFn';

ReactDom.render(
	<div className="some">
		<h2>Hello, World!</h2>
		<hr/>
		<h3>Class max=3</h3>
		<CounterClass max={3} />
		<h3>Class max=5</h3>
		<CounterClass max={5} />
		<hr/>
		<h3>Fn max=3</h3>
		<CounterFn max={3}/>
		<h3>Fn max=5</h3>
		<CounterFn max={5}/>
		<hr/>
		<div>Text</div>
		<UserCard name="Dmitry" text="Hi there!" />
		<UserCard name="Igor" text="Hi!"/>
		<UserCard name="Vitalii" text="Hello!"/>
	</div>,
	document.querySelector('.app')
);



/* let some = { fn(){} };
some.fn();
let { fn } = some;
fn(); */

/*
let { name, text } = props;
let name = props.name;
let text = props.text;

function UserCard(props){
	return <div className="card">
		<h3>{props.name}</h3>
		<hr/>
		<div>{props.text}</div>
	</div>
} */

/* <UserCard/> -> React.createElement(UserCard, {}, []); */
/*
<UserCard name="Dmitry" text="Hi there!" />
React.createElement(UserCard, {name: "Dmitry", text: "Hi there!"}, []);
*/
