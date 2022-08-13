import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';

function CounterFn ({ min=20, max }) {
	let [current, setCurrent] = useState(min);

	function applyCurrent(num) {
		let validNum = Math.max(min, Math.min(max, num))
		setCurrent(validNum)
	}
	function dec() { applyCurrent(current - 1) }
	function inc() { applyCurrent(current + 1) }
	function parseCurrentStr(e) {
		let num = parseInt(e.target.value);
		applyCurrent(isNaN(num) ? min : num);
	}

	useEffect( () => {
		console.log('---',min,max);
		applyCurrent(current);
	}, [min, max]);

	return <div>
		<button type="button" onClick={dec}>-</button>
		<input type="text" placeholder="tut texter figach" value={current} onChange={parseCurrentStr} />
		<button type="button" onClick={inc}>+</button>
	</div>
}


CounterFn.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired
}
export default CounterFn
