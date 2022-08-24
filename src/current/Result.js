import React from 'react';

export default function({onPrev}) {

	return <div>
		<h1>Result screen</h1>
		<hr />
		<button type='button' className='btn btn-primary' onClick={onPrev}>Prev</button>
	</div>

}
