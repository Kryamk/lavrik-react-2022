import React, { useState } from 'react';

export default function () {
	let [current, setCurrent] = useState(1);

	// let some = useState(0);
	// console.log('some',some);

	// let current = some[0];
	// let current2 = useState(0)[0];
	// console.log('current',current);
	// console.log('current2',current2);

	// let setCurrent = some[1];
	// console.log('setCurrent',setCurrent);


	return <div>
		<span>{current}</span>
		<button type="button" onClick={() => setCurrent(current + 1)}>+</button>
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







*/
