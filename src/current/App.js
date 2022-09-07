import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './style.css';
import useStore from './hooks/useStore';

import RouterView from './routers';
import CartState from './components/CartState';


export default observer(function () {
	let [cartStore] = useStore('cart');

	return (
		<>
			<header>
				<div className="container mt-1">
					<div className="row">
						<div className="col">
							Logo
						</div>
						<div className="col">
							<CartState />
						</div>
					</div>
				</div>
			</header>
			<div>
				<div className="container">
					<div className="row">
						<aside className="col col-3">
							<ul className='list-group'>
								<li className='list-group-item'>
									<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/'>Home</NavLink>
								</li>
								<li className='list-group-item'>
									<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/cart'>Cart</NavLink>
								</li>
								<li className='list-group-item'>
									<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/order'>Order</NavLink>
								</li>
							</ul>
						</aside>
						<main className="col col-9">
							<RouterView />
						</main>
					</div>
				</div>
			</div>

			<footer className='mt-1'>
				<hr />
				<div className="container">2022</div>
			</footer>
		</>
	)
})


{/* <li className='list-group-item'> <Link to='/'>Home</Link> </li>
<li className='list-group-item'> <Link to='/cart'>Cart</Link> </li>
<li className='list-group-item'> <Link to='/order'>Order</Link> </li> */}
