import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useStore from '../../hooks/useStore';
import { observer } from 'mobx-react-lite';

Cardalt.propTypes = {
	idProduct : PropTypes.number.isRequired
}

function Cardalt({idProduct}) {
	console.log('render Cardalt');
	let [productStore, cartStore] = useStore('products','cart');
	let pr = productStore.item(idProduct); //проверка на 404
	let inn = cartStore.inCart(pr.id);
	return (
		<div className="card">
			<div className="card-body">
				<h3>{pr.title}</h3>
				<div>{pr.price}</div>
				<Link to={`/product/${pr.id}`}>Read more</Link>
				<hr />
				{inn ?
					<button disabled={cartStore.isProcess(pr.id)} className='btn btn-danger' type="button" onClick={()=>(cartStore.remove(pr.id))}>Remove</button> :
					<button disabled={cartStore.isProcess(pr.id)} className='btn btn-success' type="button" onClick={()=>(cartStore.add(pr.id))}>Add</button>
				}
			</div>
		</div>
	)
}
// export default observer(Cardalt);

export default observer(Cardalt);
