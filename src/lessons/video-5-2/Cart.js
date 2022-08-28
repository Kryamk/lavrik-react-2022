import React, { useContext } from 'react';
import SettingContext from './contexts/settings';

// import cartStore from './store/cart'; // 1й вариант с простым подключением
// import StoreContext from './contexts/store'; // 2й вариант с контекстом, обернули в main.js
import useStore from './hooks/useStore'; // 3й вариант с контекстом и кастомным хуком

import MinMax from './MinMaxLazy';
import { observer } from 'mobx-react-lite'; // Or "mobx-react".


export default observer(Cart);

function Cart({ onNext }) {

	// let cart = cartStore; // 1й вариант с простым подключением
	// let { cart } = useContext(StoreContext); // 2й вариант с контекстом
	let [ cart, testStore ] = useStore('cart', 'testStore'); // 3й вариант с контекстом и кастомным хуком
	// console.log('---',testStore);
	let { products, total, remove, change } = cart;



	let settings = useContext(SettingContext);
	// console.log('---',settings);
	let className = ['cart'];
	let classTheme = settings.theme == 'light' ? 'light' : 'dark';
	className.push(classTheme);


	return <div className={className.join(' ')}>
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
						<td><MinMax min={1} max={pr.rest} current={pr.cnt} onChange={cnt => { change(pr.id, cnt) }} /></td>
						<td>
							<button type="button" onClick={() => { remove(pr.id) }}>X</button>
							<button type="button" onClick={() => { change(pr.id, pr.rest) }}>{settings.lang == 'ru' ? 'Макс' : 'Max'}</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
		<hr />
		<strong>Total: {total}</strong>

		<hr />
		<button type='button' className='btn btn-primary' onClick={onNext}>Move to Order</button>
	</div>

}
