import React from 'react';

import useStore from '../hooks/useStore';
import { observer } from 'mobx-react-lite';

import { Link, useParams } from 'react-router-dom';


export default observer(Product);
function Product() {
	let params = useParams();
	console.log('---',params);
	return <div className='cart dark'>
		<h1>Product</h1>
	</div>

}
