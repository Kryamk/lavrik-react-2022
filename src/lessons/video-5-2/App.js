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
	// let [ products, setProducts ] = useState(productsStub());
	// let setProductCnt = (id, cnt) => {
	// 	let newProducts = products.map(pr => pr.id != id ? pr : ({ ...pr, cnt }));
	// 	setProducts([...newProducts]);
	// }
	// function removeProduct(id) {
	// 	let newProducts = products.filter( pr => pr.id != id );
	// 	setProducts([...newProducts]);
	// }

	/* Order form */
	let [ orderForm, setOrderForm] = useState([
		{ name: 'email', label:'Email', value: '', valid: false, pattern: /^.+@.+$/ },
		// { name: 'tel', label:'Tel', value: '', valid: false, pattern: /^\d{5,12}.+$/ },
		{ name: 'tel', label:'Tel', value: '', valid: false, pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ },
		{ name: 'name', label:'Name', value: '', valid: false, pattern: /^.{2,}$/ }
	]);

	let orderData = {};
	orderForm.forEach( item => { orderData[item.name] = item.value; });


	let orderFormUpdate = (name, value) => {
		setOrderForm(orderForm.map( field => {
			if (field.name !== name) {
				return field;
			}
			let valid = field.pattern.test(value);
			return {...field, value, valid};
		}));
	}




	return (
		<SettingContext.Provider value={settings}>
			<div className="some container mt-1">
				{ page === 'cart' &&
					<Cart onNext={moveToOrder} />
				}
				{ page === 'order' &&
					<Order
					fields={orderForm}
					onChange={orderFormUpdate}
					onPrev={moveToCart}
					onNext={moveToResult} />
				}
				{ page === 'result' &&
					<Result
						onPrev={moveToOrder}
						orderData={orderData}
					/>
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
