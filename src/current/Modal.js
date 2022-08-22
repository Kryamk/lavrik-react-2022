import React, { Children, useRef } from 'react';
import useClickOutside from './hooks/useClickOutside';


export default function({showed, onClose, title, children}) {
	// console.log('---',children);

	let root = useRef();
	let classes = ['alert', 'alert-success'];

	if (!showed) {
		classes.push('d-none');
	}

	useClickOutside(root, function() {
		if (showed) {
			onClose();
		}
	});

	let content = !children ? null : <>
		{children}
		<hr/>
	</>

	return <div className={classes.join(' ')} ref={root}>
		<h2>{ title }</h2>
		{content}
		<button className="btn btn-success" onClick={onClose}>Ok</button>
	</div>

}
