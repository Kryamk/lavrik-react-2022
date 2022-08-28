import React from 'react';

import { observer } from 'mobx-react-lite';
// import cartStore from './store/cart';   // импорт напрямую
import useStore from './hooks/useStore'; // импорт через кастомный хук

export default observer(function({onPrev}) {
	let [ cart ] = useStore('cart');
	let [ order ] = useStore('order');
	let orderFields = order.orderData();

	return <div>
		<h1>Hello {orderFields.name}</h1>
		<p>Email: {orderFields.email}</p>
		<p>Telephone: {orderFields.tel}</p>
		{/* <p>Total: {cartStore.total}</p>  */}
		<p>Total: {cart.total}</p>
		<hr />
		<button type='button' className='btn btn-primary' onClick={onPrev}>Prev</button>
	</div>

});
