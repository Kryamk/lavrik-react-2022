import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


export default function ({ fields, onChange, onPrev, onNext }) {

	let isValid = fields.every(f => f.valid);

	let [modalShow, setModalShow] = useState(false);
	let openModal = () => setModalShow(true);
	let closeModal = () => setModalShow(false);

	let [confirmed, setConfirmed] = useState(false);

	let sendForm = () => {
		setConfirmed(true);
		closeModal();
	}
	let onExited = () => {
		if (confirmed) {
			onNext();
		}
	}


	return <div>
		<h1>Input Data</h1>
		<hr />

		<form className='bg-white p-3' action="#">
			{fields.map(field => (
				<div className="form-group" key={field.name}>
					<label>{field.label}</label>
					<input
						type="text"
						className={`form-control ${field.value.length && !field.valid ? 'border border-danger' : ''}`}
						name={field.name}
						value={field.value}
						onChange={e => onChange(field.name, e.target.value.trim())}
					/>
				</div>
			))}
		</form>

		<hr />
		<button type='button' className='btn btn-warning' onClick={onPrev}>Back to cart</button>
		<button type='button' className='btn btn-primary' onClick={openModal} disabled={!isValid}>Move to Result</button>

		<Modal show={modalShow} onHide={closeModal} onExited={onExited}>
			<Modal.Header closeButton>
				<Modal.Title>Check data</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>...</p>
				<p>...</p>
				<p>...</p>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={closeModal}>Close</Button>
				<Button variant="primary" onClick={sendForm}>Ok, send</Button>
			</Modal.Footer>
		</Modal>

		{/* <table>
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
		</table> */}
	</div>

}
