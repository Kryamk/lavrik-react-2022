import React from 'react';

import useStore from '../hooks/useStore';
import { observer } from 'mobx-react-lite';

import Card from '../components/products/card';
// import Cardalt from '../components/products/cardalt';


export default observer(Home);
function Home() {
	console.log('render Home');
	let [productsStore, cartStore] = useStore('products', 'cart');
	let { products } = productsStore;
	let {inCart} = cartStore;

	// let [productsStore] = useStore('products');
	// let { products } = productsStore;





	return <div className='cart dark'>
		<h1>Catalog</h1>
		<hr />
		<div className="row">
			{products.map(pr => (

				<div className="col col-4 mb-3 mt-3" key={pr.id}>
					<Card
						pr={pr}
						pending={cartStore.isProcess(pr.id)}
						onAdd={cartStore.add }
						onRemove={() => { cartStore.remove(pr.id) }}
						inn={inCart(pr.id)}
					/>
					{/* <Cardalt idProduct={pr.id} /> */}
				</div>
			))}
		</div>
	</div>

}




/*
import React from 'react';

import useStore from '../hooks/useStore';
import { observer } from 'mobx-react-lite';

import { Link } from 'react-router-dom';


export default observer(Home);
function Home() {
	// console.log('render Home');
	let [productsStore, cartStore] = useStore('products', 'cart');
	let { products } = productsStore;



	return <div className='cart dark'>
		<h1>Catalog</h1>
		<hr />
		<div className="row">
			{products.map(pr => (
				<div className="col col-4 mb-3 mt-3" key={pr.id}>
					<div className="card">
						<div className="card-body">
							<h3>{pr.title}</h3>
							<div>{pr.price}</div>
							<Link to={`/product/${pr.id}`}>Read more</Link>
							<hr />


							{cartStore.inCart(pr.id) ?
								<button disabled={cartStore.isProcess(pr.id)} className='btn btn-danger' type="button" onClick={() => { cartStore.remove(pr.id) }}>Remove</button> :
								<button disabled={cartStore.isProcess(pr.id)} className='btn btn-success' type="button" onClick={() => { cartStore.add(pr.id) }}>Add</button>
							}


						</div>
					</div>
				</div>
			))}
		</div>
	</div>

}
 */
