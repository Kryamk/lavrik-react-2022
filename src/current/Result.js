import React from 'react';

export default function({onPrev, orderData}) {

	return <div>
		<h1>Hello {orderData.name}</h1>
		<p>{orderData.email}</p>
		<p>{orderData.tel}</p>
		<hr />
		<button type='button' className='btn btn-primary' onClick={onPrev}>Prev</button>
	</div>

}
