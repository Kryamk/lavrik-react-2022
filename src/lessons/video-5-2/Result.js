import React from 'react';

import { observer } from 'mobx-react-lite';
// import cartStore from './store/cart';   // импорт напрямую
import useStore from './hooks/useStore'; // импорт через кастомный хук

export default observer(function({onPrev, orderData}) {
	let [ cart ] = useStore('cart');

	return <div>
		<h1>Hello {orderData.name}</h1>
		<p>{orderData.email}</p>
		<p>{orderData.tel}</p>
		{/* <p>Total: {cartStore.total}</p>  */}
		<p>Total: {cart.total}</p>
		<hr />
		<button type='button' className='btn btn-primary' onClick={onPrev}>Prev</button>
	</div>

});
