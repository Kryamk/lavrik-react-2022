import React, { useState } from 'react'
import cmpProps from './props';

function Counter({ min = 1, max }){
	let [ current, setCurrent ] = useState(min);

	function applyCurrent(num){
		let validNum = Math.max(min, Math.min(max, num));
		setCurrent(validNum);
	}

	let inc = () => applyCurrent(current + 1);
	let dec = () => applyCurrent(current - 1);

	return <div>
		<button type="button" onClick={ dec }>-</button>
		<span>{ current }</span>
		<button type="button" onClick={ inc }>+</button>
	</div>
}

Counter.propTypes = cmpProps;

export default Counter;