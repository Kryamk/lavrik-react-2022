import React, { useContext } from 'react';
import MinMax from '../MinMaxLazy';

// import cartStore from './store/cart'; // 1й вариант с простым подключением
// import StoreContext from './contexts/store'; // 2й вариант с контекстом, обернули в main.js
import useStore from '../hooks/useStore'; // 3й вариант с контекстом и кастомным хуком
import { observer } from 'mobx-react-lite'; // Or "mobx-react".

import { Link } from 'react-router-dom';


export default observer(Cart);
function Cart() {
	// let cart = cartStore; // 1й вариант с простым подключением
	// let { cart } = useContext(StoreContext); // 2й вариант с контекстом
	// let [cart] = useStore('cart'); // 3й вариант с контекстом и кастомным хуком
	// let { products, total, remove, change } = cart;
	let [cartStore] = useStore('cart');

	let items



	return <div className='cart dark'>
		<h1>Cart</h1>
		<table>
			<tbody>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Price</th>
					<th>Cnt</th>
					<th>Total</th>
					<th>Delete</th>
				</tr>
				{products.map((pr, i = 0) => (

					<tr key={pr.id}>
						<td>{i + 1}</td>
						<td>{pr.title}</td>
						<td>{pr.price}</td>
						<td>{pr.cnt}</td>
						<td>{pr.cnt * pr.price}</td>
						<td><MinMax min={1} max={pr.rest} current={pr.cnt} onChange={cnt => { /* change(pr.id, cnt) */ }} /></td>
						<td>
							<button type="button" onClick={() => { remove(pr.id) }}>X</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
		<hr />
		<strong>Total: {total}</strong>

		<hr />
		<Link className='btn btn-primary' to="/order">Move to Order</Link>
	</div>

}
