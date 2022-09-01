import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
	return <>
		<h1>Page not found</h1>
		<hr />
		<p>Start from <Link to="/">To home</Link></p>

	</>
}
