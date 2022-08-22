import React, { useRef, useEffect } from 'react';
import propTypes from './props';
import style from './style.module.css';
// console.log('---',style);
MinMaxLazy.propTypes = propTypes;

function MinMaxLazy ({ min=1, max, current, onChange }) {
	// console.log('---','MinMaxLazy');
	let inp = useRef();
	// let btnModal = useRef();
	// let modal = useRef();

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
	}, [current]);



	// useEffect( ()=> {
	// 	btnModal.current.addEventListener('click', (e)=> {
	// 		e.preventDefault();
	// 		modal.current.classList.add(style.open);
	// 	});
	// 	document.addEventListener('click', (e)=> {
	// 		if ( e.target !== btnModal.current &&  !modal.current.contains(e.target) ) {
	// 			modal.current.classList.remove(style.open);
	// 			console.log('---', e);
	// 		}
	// 	});
	// }, [])




	return <div>
		<button className="btn btn-success" type="button" onClick={dec}>-</button>
		<input
			ref={inp}
			type="text"
			className={style.inp}
			defaultValue={current}
			onBlur={parseCurrentStr}
			onKeyPress={onKeyPress}
		/>
		<button className="btn btn-warning" type="button" onClick={inc}>+</button>


		{/* <button ref={btnModal} type="button">Modal</button>
		<div ref={modal} className={style['custom-modal']}><h2>Modal</h2></div> */}
	</div>
}



export default MinMaxLazy
