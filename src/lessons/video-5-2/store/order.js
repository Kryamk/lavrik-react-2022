import { makeAutoObservable } from 'mobx';

export class Order {
	fields = [
		{ name: 'email', label:'Email', value: '', valid: false, pattern: /^.+@.+$/ },
		{ name: 'tel', label:'Tel', value: '', valid: false, pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ },
		{ name: 'name', label:'Name', value: '', valid: false, pattern: /^.{2,}$/ }
	]


	constructor() {
		makeAutoObservable(this);
	}
}

export default new Order();
