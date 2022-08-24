import React, { useEffect, useRef } from 'react';

export default function({onPrev, onNext}) {

	let inputName = useRef( );

	let inputTel = useRef();
	let inputEmail = useRef();

	useEffect( ()=> {
		inputName = {...inputName, name: 'name'};
		console.log('---',inputName);
	}, [])

	let values = [
		{
			name: 'fio',
			value: '',
			validPattern: '',
			valid: false,
		},
		{
			name: 'tel',
			value: '',
			validPattern: '',
			valid: false,
		},
		{
			name: 'email',
			value: '',
			validPattern: '',
			valid: false,
		}
	];

	function fnValue(e) {
		e.preventDefault();
		let valueName = inputName.current.value;
		let valueTel = inputTel.current.value;
		let valueEmail = inputEmail.current.value;
		values = values.map( (item)=> {
			if (item.name == 'fio') {
				let itemNew =  {...item, value : valueName};
				let valid = valueName == '' ? false : true;
				itemNew = {...itemNew, valid}
				return itemNew;
			}
			else {
				return item;
			}
		});
		console.log('---',values);

	}



	return <div>
		<h1>Input Data</h1>
		<hr />


		<form action="#">
			<input ref={inputName} type="text" placeholder='Имя'/>
			<input ref={inputTel} type="text" placeholder='Телефон' />
			<input ref={inputEmail} type="text" placeholder='Почта' />
			<button onClick={fnValue}>Send</button>
		</form>




		<hr />
		<button type='button' className='btn btn-warning' onClick={onPrev}>Back to cart</button>
		<button type='button' className='btn btn-primary' onClick={onNext}>Move to Result</button>
		{/* <table>
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
						<td><MinMax min={1} max={pr.rest} current={pr.cnt} onChange={cnt => setCnt(pr.id, cnt)} /></td>
						<td>
							<button type="button" onClick={ ()=> {del(pr.id) }}>X</button>
							<button type="button" onClick={ ()=> {setCnt(pr.id, pr.rest) }}>Max</button>
						</td>
					</tr>
				))}
			</tbody>
		</table> */}
	</div>

}
