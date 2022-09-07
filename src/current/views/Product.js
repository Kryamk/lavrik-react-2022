import React from 'react';

import useStore from '../hooks/useStore';
import { observer } from 'mobx-react-lite';

import { useParams } from 'react-router-dom';
import E404 from './E404';


export default observer(Product);
function Product() {
	let [productsStore, cartStore] = useStore('products', 'cart');
	let { id } = useParams();

	let product = productsStore.item(id);
	if (!/^[1-9]+\d*$/.test(id) || product === undefined) {
		return <E404 />
	}

	return <div className='cart dark'>
		<h1>{product.title}</h1>
		<div><strong>Price: {product.price} </strong></div>
		{cartStore.inCart(product.id) ?
			<button className='btn btn-danger' type="button" onClick={() => { cartStore.remove(product.id) }}>Remove</button> :
			<button className='btn btn-success' type="button" onClick={() => { cartStore.add(product.id) }}>Add</button>
		}
	</div>

}





/*
	let id = +params.id;
	let id = parseInt(params.id);
	console.log('---',id);
	id = isNaN(id) ? null : id;
 */
/*
	if (!/^[1-9]+\d*$/.test(id)) {
		console.log(1);
		return <E404 />
	}
	let product = productsStore.item(id);
	if ( product === undefined) {
		console.log(2);
		return <E404 />
	}
 */
