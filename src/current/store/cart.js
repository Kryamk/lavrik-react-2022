import { makeAutoObservable, toJS } from "mobx";

export default class Cart {

	items = []

	get total() {
		let getProduct = this.rootStore.products.getProduct;
		return this.items.reduce((sum, item) => {
			let product = getProduct(item.id);
			return sum + product.price * item.cnt;
		}, 0)
		// return this.products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);
	}

	inCart(id) {
		return this.items.some( item => item.id == id);
	}

	change = (id, cnt) => {
		// let product = this.products.find(pr => pr.id == id);

		// if (product !== undefined) {
		// 	product.cnt = Math.max(1, Math.min(product.rest, cnt));
		// }
	}

	remove = (id) => {
		this.items = this.items.filter(pr => {
			if (pr.id !== id) return pr;
			pr.cnt--;
			return pr.cnt == 0 ? false : pr;
		});
		// console.log(toJS(this.items));
	}

	add = (id) => {

		if (this.inCart(id)) {
			let product = this.rootStore.products.getProduct(id);
			this.items.forEach(item => {
				if (item.id == id && item.cnt <= product.cnt) {
					item.cnt++
				}
			});
		}
		else {
			this.items.push({id: id, cnt: 1})
		}
		// console.log(toJS(this.items));
	}

	constructor(rootStore) {
		makeAutoObservable(this);
		this.rootStore = rootStore;

		// setTimeout(()=>{
		// 	this.items.pop();
		// }, 3000)
	}
}




/*
inCart(id) {
	return this.items.some( item => item.id == id);
}
get inCart() {
	return id => this.items.some( item => item.id == id);
}
 */
