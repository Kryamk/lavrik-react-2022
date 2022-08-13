import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';





function CounterFn ({ min=20, max }) {
	let [current, setCurrent] = useState(min);



	function applyCurrent(num) {
		let validNum = Math.max(min, Math.min(max, num))
		setCurrent(validNum)
	}
	// let dec = () => applyCurrent(current - 1)
	// let inc = () => applyCurrent(current + 1)
	function dec() { applyCurrent(current - 1) }
	function inc() { applyCurrent(current + 1) }

	function parseCurrentStr(e) {
		console.log('---',e.target.value);
		// let value = e.target.value;
		// if ( !isNaN(value) ) applyCurrent(parseInt(value));
		// if ( isNaN(+value) ) return;
		// if (  value === '' ) {
		// 	value = min;
		// }
		// applyCurrent(parseInt(value));

		let num = parseInt(e.target.value);
		applyCurrent(isNaN(num) ? min : num);

		// если min минусовое то уже заморочнее, только кнопками менять или выделять число чтобы заменить.
		// а если двухзначные, то ваще дилемма
	}

	return <div>
		{/* { console.log('---',typeof current)} */}
		<button type="button" onClick={dec}>-</button>
		<span>{current}</span>
		<input type="text" placeholder="tut texter figach" value={current} onChange={parseCurrentStr} />
		{/* при type="number" допускает ввод 01 02.
		Если текст, то всё норм, вот только нужна проверка на число. !isNaN(value) работает
		Теперь даже дробные нельзя ввести, но можно вставить скопировав дробное число
		https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
		https://parsebox.io/dthree/gyeveeygrngl дробные в целые числа

		*/}
		<button type="button" onClick={inc}>+</button>
		{/* <button type="button" onClick={() => setCurrent(current + 1)}>+</button> */}




	</div>
}

CounterFn.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired
}
export default CounterFn
