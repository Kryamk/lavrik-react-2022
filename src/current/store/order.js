import { makeAutoObservable } from 'mobx';

export class Order {
	fields = [
		{ name: 'email', label:'Email', value: '', valid: false, pattern: /^.+@.+$/ },
		{ name: 'tel', label:'Tel', value: '', valid: false, pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ },
		{ name: 'name', label:'Name', value: '', valid: false, pattern: /^.{2,}$/ }
	]

	orderData = () => {
		let orderFields = [];
		this.fields.forEach(field => {
			orderFields[field.name] = field.value;
		});
		return orderFields;
	}

	orderFormUpdate = (name, value) =>{
		// console.log('---',this);
		// console.log('---',this.fields);
		this.fields = this.fields.map( field => {
			if (field.name !== name) {
				return field;
			}
			let valid = field.pattern.test(value);
			return {...field, value, valid};
		});
	}


	constructor() {
		makeAutoObservable(this);
	}
}

export default new Order();
