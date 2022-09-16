import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

Card.propTypes = {
	pr : PropTypes.object.isRequired,
	pending : PropTypes.bool.isRequired,
	// onAdd : PropTypes.func.isRequired,
	onRemove : PropTypes.func.isRequired,
	inn : PropTypes.bool.isRequired,
}

function Card({pr, pending, onAdd, onRemove,inn}) {
	console.log('render Card');
	let add = ()=>{onAdd(pr.id)};
	return (
		<div className="card">
			<div className="card-body">
				<h3>{pr.title}</h3>
				<div>{pr.price}</div>
				<Link to={`/product/${pr.id}`}>Read more</Link>
				<hr />
				{inn ?
					<button disabled={pending} className='btn btn-danger' type="button" onClick={onRemove}>Remove</button> :
					<button disabled={pending} className='btn btn-success' type="button" onClick={add}>Add</button>
				}
			</div>
		</div>
	)
}
function areEqual(prevProps, nextProps) {
	// console.log(777);
	// console.log(prevProps);
	// console.log(nextProps);
}
export default Card;
// export default React.memo(Card,areEqual);
