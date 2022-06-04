import React, { useState } from 'react';

export default function ({ max }) {
	let [current, setCurrent] = useState(1);

	function inc() {
		if (current < max) {
			setCurrent(current + 1);
		}
	}

	return <div>
		<span>{current}</span>
		{/* <button type="button" onClick={() => setCurrent(current + 1)}>+</button> */}
		<button type="button" onClick={inc}>+</button>
	</div>
}





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
