import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

MinMaxLazyState.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired,
	current: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
}

function MinMaxLazyState ({ min=1, max, current, onChange }) {
	console.log('---','MinMaxLazyState');
	let [ inpVal, setInpVal ] = useState(current);
	let onInput = e => setInpVal(e.target.value);

	function onKeyPress(e) {
		if ( e.key === 'Enter') {
			parseCurrentStr(e);
		}
	}


	function parseCurrentStr(e) {
		let num = parseInt(inpVal);
		applyCurrent(isNaN(num) ? min : num);
	}
	function applyCurrent(num) {
		let validNum = Math.max(min, Math.min(max, num));
		setInpVal(validNum);
		onChange(validNum);
	}

	function dec() { applyCurrent(current - 1) }
	function inc() { applyCurrent(current + 1) }

	useEffect( () => {
		setInpVal(current)
	}, [current]);



	return <div>
		<button type="button" onClick={dec}>-</button>
		{/* <input type="text" value={inpVal} onChange={e => setInpVal(e.target.value)} /> */}
		<input type="text" value={inpVal} onChange={onInput} onBlur={parseCurrentStr} onKeyPress={onKeyPress} />
		<button type="button" onClick={inc}>+</button>
	</div>
}



export default MinMaxLazyState
