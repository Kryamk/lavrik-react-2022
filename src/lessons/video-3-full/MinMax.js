import React, { useState } from 'react';
import PropTypes from 'prop-types';

MinMax.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired,
	current: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
}

function MinMax ({ min=1, max, current, onChange }) {
	console.log('---','MinMax');

	function dec() { applyCurrent(current - 1) }
	function inc() { applyCurrent(current + 1) }


	function parseCurrentStr(e) {
		let num = parseInt(e.target.value);
		applyCurrent(isNaN(num) ? min : num);
	}
	function applyCurrent(num) {
		let validNum = Math.max(min, Math.min(max, num));
		onChange(validNum);
	}







	return <div>
		<button type="button" onClick={dec}>-</button>
		<input type="text" placeholder="tut texter figach!" value={current} onChange={parseCurrentStr} />
		<button type="button" onClick={inc}>+</button>
	</div>
}



export default MinMax
