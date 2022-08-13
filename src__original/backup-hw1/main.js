import React from 'react'
import ReactDom from 'react-dom';

import CounterFn from './CounterFn';
/* import CounterFn from './counter/index.js' */

ReactDom.render(
	<div className="some">
		<h3>Fn max=5</h3>
		<CounterFn min={-4} max={5}/>
		<hr/>
		<h3>Fn 20,50</h3>
		<CounterFn min={20} max={50}/>
		<hr/>
	</div>,
	document.querySelector('.app')
);