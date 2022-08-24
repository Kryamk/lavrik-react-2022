import React, { useState } from 'react';
import Cart from './Cart';
import Order from './Order';
import Result from './Result';
import './style.css';

import SettingContext from './contexts/settings';

export default function () {

	/* settings */
	let [ settings, setSettings ] = useState( {lang: 'ru', theme: 'dark'} );


	/* router parody */
	let [ page, setPage ] = useState('cart')
	let moveToCart = () => setPage( 'cart' );
	let moveToOrder = () => setPage( 'order' );
	let moveToResult = () => setPage( 'result' );


	/* products */
	let [products, setProducts] = useState(productsStub());
	let setProductCnt = (id, cnt) => {
		let newProducts = products.map(pr => pr.id != id ? pr : ({ ...pr, cnt }));
		setProducts([...newProducts]);
	}
	function removeProduct(id) {
		let newProducts = products.filter( pr => pr.id != id );
		setProducts([...newProducts]);
	}


	return (
		<SettingContext.Provider value={settings}>
			<div className="some container mt-1">
				{ page === 'cart' &&
					<Cart onNext={moveToOrder} products={products} onChange={setProductCnt} onRemove={removeProduct} />
				}
				{ page === 'order' &&
					<Order onPrev={moveToCart} onNext={moveToResult} />
				}
				{ page === 'result' &&
					<Result onPrev={moveToOrder} products={products} />
				}
				<hr />
				<footer>
					<button type="button" onClick={ ()=>setSettings( {...settings, lang: 'ru'}) }>ru</button>
					<button type="button" onClick={ ()=>setSettings( {...settings, lang: 'en'}) }>en</button>
					<hr />
					<button type="button" onClick={ ()=>setSettings( {...settings, theme: 'light'})}>light</button>
					<button type="button" onClick={ ()=>setSettings( {...settings, theme: 'dark'})}>dark</button>
				</footer>

			</div>
		</SettingContext.Provider>
	)
}


function productsStub() {
	return [
		{
			id: 100,
			title: 'Ipnone 200',
			price: 12000,
			rest: 10,
			cnt: 1
		},
		{
			id: 101,
			title: 'Samsung AAZ8',
			price: 22000,
			rest: 5,
			cnt: 1
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 2,
			cnt: 1
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 8,
			cnt: 1
		}
	];
}
