import React, { useContext } from 'react';
// import MinMax from '../components/MinMaxLazy';

// import cartStore from './store/cart'; // 1й вариант с простым подключением
// import StoreContext from './contexts/store'; // 2й вариант с контекстом, обернули в main.js
import useStore from '../hooks/useStore'; // 3й вариант с контекстом и кастомным хуком
import { observer } from 'mobx-react-lite'; // Or "mobx-react".

import { Link } from 'react-router-dom';
import Cartrow from '../components/cart-row';


export default observer(Cart);
function Cart() {
	console.log('render Cart');
	let [cartStore] = useStore('cart');
	let { itemsDetailed: products, total, remove, change, isProcess, idInProcess } = cartStore;
	// console.log('-----',idInProcess);


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
					<th>+/-</th>
					<th>Delete/Max</th>
				</tr>

				{/* {products.map((pr, i = 0) => (
					<tr className={isProcess(pr.id) ? 'isprocess1' : ''} key={pr.id}>
						<td>{i + 1}</td>
						<td>{pr.title}</td>
						<td>{pr.price}</td>
						<td>{pr.cnt}</td>
						<td>{pr.cnt * pr.price}</td>
						<td><MinMax min={1} max={pr.rest} current={pr.cnt} onChange={cnt => { change(pr.id, cnt) }} /></td>
						<td>
							<button disabled={isProcess(pr.id)} type="button" onClick={() => { remove(pr.id) }}>X</button>
							<button disabled={isProcess(pr.id)} type="button" onClick={() => { change(pr.id, pr.rest) }}>Max</button>
						</td>
					</tr>
				))} */}

				{products.map((pr, i=0) => (
					<Cartrow key={pr.id} {...pr} num={i + 1} onRemove={remove} onChange={change} isProcess={isProcess} />
				))}



			</tbody>
		</table>
		<hr />
		<strong>Total: {total}</strong>

		<hr />
		<Link className='btn btn-primary' to="/order">Move to Order</Link>
	</div>

}



	// let cart = cartStore; // 1й вариант с простым подключением
	// let { cart } = useContext(StoreContext); // 2й вариант с контекстом
	// let [cart] = useStore('cart'); // 3й вариант с контекстом и кастомным хуком
	// let { products, total, remove, change } = cart;
