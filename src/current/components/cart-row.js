import React from 'react';
import MinMax from './MinMaxLazy';
import { observer } from 'mobx-react-lite';


function Cartrow({pr, id, title, price, cnt, rest, num, onChange, onRemove, isProcess}) {
	console.log('render Cartrow');
	let change = cnt => { onChange(id, cnt) };
	let remove = () => { onRemove(id) }
	let maxSet = () => { onChange(id, rest) }



	return (
		<tr className={isProcess(id) ? 'isprocess1' : ''}  key={id}>
			<td>{num}</td>
			<td>{title}</td>
			<td>{price}</td>
			<td>{cnt}</td>
			<td>{cnt * price}</td>
			<td><MinMax min={1} max={rest} current={cnt} onChange={change} /></td>
			<td>
				<button disabled={isProcess(id)} type="button" onClick={remove}>X</button>
				<button disabled={isProcess(id)} type="button" onClick={maxSet}>Max</button>
			</td>
		</tr>
	)
}
function areEqual(prevProps, nextProps) {
	console.log(777);
}
export default React.memo(Cartrow/*, areEqual */);
// export default Cartrow;
// export default observer(Cartrow); // Без observer не будет работать isProcess
