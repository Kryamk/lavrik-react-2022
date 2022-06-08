import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CounterFn ({ min=0, max }) {
	let [current, setCurrent] = useState(3);

	function incMinus() {
		if (current > min) {
			setCurrent(current - 1);
		}
	}
	function incPlus() {
		if (current < max) {
			setCurrent(current + 1);
		}
	}
	function change(e) {
		if (e.target.value >= min && e.target.value <= max) {
			setCurrent(e.target.value)
		}
	}


	return <div>
		<button type="button" onClick={incMinus}>-</button>
		<span>{current}</span>
		<input type="number" placeholder="tut texter figach" value={current} onChange={change} />
		<button type="button" onClick={incPlus}>+</button>
		{/* <button type="button" onClick={() => setCurrent(current + 1)}>+</button> */}
	</div>
}

CounterFn.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired
}
export default CounterFn






/*
let [ current, setCurrent ] = useState(1);
=== без деструкторизации:
let some = useState(0);
let current = some[0];
let setCurrent = some[1];

useState - в памяти создаёт ячейку, ассоциирует её с текущим компонентом и даёт нам значение этой ячейи и инструмент её обновления
useState обновляется, но значение не сбрасывается. Без объектов никуда. Просто переменную проверки добавляет, что уже вызывалась.



	// let some = useState(0);
	// console.log('some',some);

	// let current = some[0];
	// let current2 = useState(0)[0];
	// console.log('current',current);
	// console.log('current2',current2);

	// let setCurrent = some[1];
	// console.log('setCurrent',setCurrent);



*/
