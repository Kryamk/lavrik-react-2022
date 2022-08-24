import React, { useState, useMemo } from 'react';
import MinMax from './MinMaxLazy';
import './style.css';
import Modal from './Modal';
import BModal from 'react-bootstrap/Modal';


export default function () {
	let [products, setProducts] = useState(productsStub());
	let [showDetails, setShowDetails] = useState(false);
	let [showFaq, setShowFaq] = useState(false);
	let total = products.reduce( (sum, current) => sum + current.price * current.cnt, 0);
	// let total = useMemo( () => products.reduce( (sum, current) => sum + current.price * current.cnt, 0), [products] );

	let setCnt = (id, cnt) => {
		let newProducts = products.map(pr => pr.id != id ? pr : ({ ...pr, cnt }));
		setProducts([...newProducts]);
	}


	function del(id) {
		let newProducts = products.filter( pr => pr.id != id );
		setProducts([...newProducts]);
	}


	return (
		<div className="some container mt-1">

			<h1>Products list</h1>


			<button type="button" onClick={ ()=>{ setShowDetails(true) } }>Total: {total}</button>
			<Modal showed={showDetails} onClose={ ()=> setShowDetails(false) } title={ `${products.length} in list, please pay order` }>
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
								<td><MinMax min={1} max={pr.rest} current={pr.cnt} onChange={cnt => setCnt(pr.id, cnt)} /></td>
								<td>
									<button type="button" onClick={ ()=> {del(pr.id) }}>X</button>
									<button type="button" onClick={ ()=> {setCnt(pr.id, pr.rest) }}>Max</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Modal>

			<hr />

			<button type="button" onClick={ ()=>{ setShowFaq(true)}}>FAQ</button>
			<BModal show={showFaq} onHide={ ()=> setShowFaq(false)} >
				<BModal.Header closeButton>
					<h2>Hello</h2>
				</BModal.Header>
				<BModal.Body>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint maxime, ratione itaque voluptatem corrupti iste consequuntur alias illo beatae adipisci, possimus odit quisquam, est autem eum in magnam ea.</p>
				</BModal.Body>
			</BModal>



		</div>
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

/*
function fn(i, ev) {}
let elems = ducument.querySelectorAll('some');
elems.forEach( (el, i) => {
	el.addEventListener('click', e => fn(i, e))
});
 */
/*
let setCnt = ( id, cnt ) => {
	console.log(id, cnt );
	// products[id].cnt = cnt;
	// setProducts([...products]); // onChange={cnt => setCnt( i, cnt)} --- c pr.id не будет работать
	// во vue так, а в реакте не прокатит, пока не подключим хранилище данных, которое спокойно относится к мутабельности данных
	let newProducts = [ ...products ]; // объекты - это ссылочные, то есть новый массив ссылается на те же объекты, оперативка не замусоривается
	let productInd = products.findIndex( pr => pr.id == id);
	let newProduct = { ...products[productInd] };
	newProduct.cnt = cnt;
	newProducts[productInd] = newProduct;
	setProducts([...newProducts]);

}
 */



/*
let arr = productsStub();
let cnt = 5;
let arr1 = arr.map( (item) => {
	if (item.id != 103) {
		return item;
	}
	else {
		let item1 = {...item};
		item1.cnt = 5;
		return item1;
	}
})
console.log('---',arr);
console.log('---',arr1);
 */



/*
	// Children
	<A href="#">
		<strong></strong>
		<em></em>
	<A >

	React.createElement(
		A,
		{ href: '#' },
		[
			React.createElement('strong'),
			React.createElement('em')
		]
	)
 */
