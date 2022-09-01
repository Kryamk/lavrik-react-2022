import { makeAutoObservable } from "mobx";

export default class Cart {

	items = [
		{id: 100, cnt: 3},
		{id: 101, cnt: 3}
	]

	get total() {
		return 0;
		// return this.products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);
	}

	get inCart() {
		return id => this.items.some( item => item.id == id);
	}

	change = (id, cnt) => {
		// let product = this.products.find(pr => pr.id == id);

		// if (product !== undefined) {
		// 	product.cnt = Math.max(1, Math.min(product.rest, cnt));
		// }
	}

	remove = (id) => {
		// this.products = this.products.filter(pr => pr.id !== id);
	}

	constructor(rootStore) {
		makeAutoObservable(this);
		this.rootStore = rootStore;

		setTimeout(()=>{
			this.items.pop();
		}, 3000)
	}
}




/*
get inCart() {
	return id => this.items.some( item => item.id == id);
}
 */
