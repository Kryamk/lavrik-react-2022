import React from 'react';
import style from './style.module.css';
import useWindowSize from '../hooks/useWindowSize';

function ProductCard( props ) {
	let { width, height } = useWindowSize();
	// console.log(props);

	let paddingSize = Math.min(parseInt(width / 200 ), 5);
	let classNames = `card p-${paddingSize}`;


	return <div className={classNames}>
		<h2>Product card</h2>
		<input type="text" className={style.inp} />
		<p>{ width }</p>
		<p>{ height }</p>
	</div>
}

export default ProductCard;
