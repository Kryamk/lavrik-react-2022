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
								<button className='btn btn-danger' type="button" onClick={() => { cartStore.remove(pr.id) }}>Remove</button> :
								<button className='btn btn-success' type="button" onClick={() => { cartStore.add(pr.id) }}>Add</button>
							}


						</div>
					</div>
				</div>
			))}
		</div>
	</div>

}
