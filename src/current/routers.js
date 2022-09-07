import React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';

import Home from './views/Home';
import Product from './views/Product';
import Cart from './views/Cart';
import Order from './views/Order';
import Result from './views/Result';
import E404 from './views/E404';

export default function() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product/:id" element={<Product />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/order" element={<Order />} />
			<Route path="/result" element={<Result />} />
			<Route path="/*" element={<E404 />} />
		</Routes>
	)

}


/*
export default function() {
	return useRoutes([
		{path: "/", element: <Home />},
		{path: "/product/:id", element: <Product />},
	]);
}
 */
