import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

MinMaxLazy.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired,
	current: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
}

function MinMaxLazy ({ min=1, max, current, onChange }) {
	console.log('---','MinMaxLazy');
	let inp = useRef();

	function onKeyPress(e) {
		if ( e.key === 'Enter') {
			parseCurrentStr(e);
		}
	}


	function parseCurrentStr() {
		let num = parseInt(inp.current.value);
		applyCurrent(isNaN(num) ? min : num);
	}
	function applyCurrent(num) {
		let validNum = Math.max(min, Math.min(max, num));
		inp.current.value = validNum;
		onChange(validNum);
	}

	function dec() { applyCurrent(current - 1) }
	function inc() { applyCurrent(current + 1) }

	useEffect( () => {
		inp.current.value = current;
	}, [current])


	return <div>
		<button type="button" onClick={dec}>-</button>
		<input ref={inp} type="text" defaultValue={current} onBlur={parseCurrentStr} onKeyPress={onKeyPress} />
		<button type="button" onClick={inc}>+</button>
	</div>
}



export default MinMaxLazy
