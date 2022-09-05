import React from 'react';

import useStore from '../hooks/useStore';
import { observer } from 'mobx-react-lite';

import { Link, useParams, useNavigate } from 'react-router-dom';


export default observer(Product);
function Product() {
	let [productsStore] = useStore('products');
	let params = useParams();
	let navigate = useNavigate();
	// console.log('---',navigate);


	let id = +params.id;
	id = isNaN(id) ? null : id;

	let product = productsStore.getProduct(id);
	if (isNaN(id) || product === undefined) {
		navigate('/404', {replace: true});
		console.log('---',404);
	}
	function to404() {
		navigate('/404', {replace: true});
	}


	return <div className='cart dark'>
		<button type="button" onClick={()=>to404()}>404</button>
		{/* <h1>{product.title}</h1> */}
	</div>

}
