import { makeAutoObservable, toJS } from 'mobx';

export default class Order {
	form = [
		{ name: 'email', label:'Email', value: '', valid: false, pattern: /^.+@.+$/ },
		{ name: 'tel', label:'Tel', value: '', valid: false, pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ },
		{ name: 'name', label:'Name', value: '', valid: false, pattern: /^.{2,}$/ }
	]

	lastFormData = {};

	get formValid() {
		return this.form.every(f => f.valid);
	}

	get data() {
		let res = {};
		this.form.forEach(field => {
			res[field.name] = field.value;
		});
		return res;
	}

	orderFormUpdate = (name, value) =>{
		let field = this.form.find( f => f.name == name)
		if ( field !== undefined ) {
			field.value = value.trim();
			field.valid = field.pattern.test(field.value);
		}
	}

	clean = () => {
		this.lastFormData = this.data;
		this.form.forEach(item => {
			item.value = '';
		})
	}


	constructor(rootStore) {
		makeAutoObservable(this);
		this.rootStore = rootStore;
	}
}

// export default new Order();



/* orderFormUpdate = (name, value) =>{
	// console.log('---',this);
	// console.log('---',this.form);
	// let newForm = toJS(this.form);
	// console.log('---',newForm);
	// this.form.forEach( el => {
	// 	console.log(el.name);
	// })

	let field = this.form.find( f => f.name == name)
	if ( field !== undefined ) {
		field.value = value.trim();
		field.valid = field.pattern.test(field.value);
	}


	// this.form = this.form.map( field => {
	// 	if (field.name !== name) {
	// 		return field;
	// 	}
	// 	let valid = field.pattern.test(value);
	// 	return {...field, value, valid};
	// });
} */
