import React from 'react';

import useStore from '../hooks/useStore'; // импорт через кастомный хук
import { observer } from 'mobx-react-lite';

import { Link } from 'react-router-dom';


export default observer(function() {
	let [cartStore, orderStore] = useStore('cart', 'order');
	// let [order] = useStore('order');
	let orderFields = orderStore.lastFormData;

	return <div>
		<h1>{orderFields.name}, you order is done!</h1>
		<p>Email: {orderFields.email}</p>
		<p>Telephone: {orderFields.tel}</p>
		<p>Total: {cartStore.total}</p>
		<hr />
		<Link className='btn btn-primary' to='/order'>Prev</Link>
	</div>

});
