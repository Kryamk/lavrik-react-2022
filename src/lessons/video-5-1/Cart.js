import React, {useContext} from 'react';
import SettingContext from './contexts/settings';
import MinMax from './MinMaxLazy';

export default function( {onNext, products, onChange, onRemove}) {
	let total = products.reduce( (sum, current) => sum + current.price * current.cnt, 0);

	let settings = useContext(SettingContext);
	// console.log('---',settings);

	let className = ['cart'];
	let classTheme = settings.theme == 'light' ? 'light' : 'dark';
	className.push(classTheme);




	return <div className={ className.join(' ') }>
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
						<td><MinMax min={1} max={pr.rest} current={pr.cnt} onChange={cnt => onChange(pr.id, cnt)} /></td>
						<td>
							<button type="button" onClick={ ()=> {onRemove(pr.id) }}>X</button>
							<button type="button" onClick={ ()=> {onChange(pr.id, pr.rest) }}>{settings.lang == 'ru' ? 'Макс' : 'Max'}</button>
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
