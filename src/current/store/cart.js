import { makeAutoObservable, runInAction, toJS } from "mobx";

const BASEURL = 'http://faceprog.ru/reactcourseapi';

export default class Cart {

	items = []

	#token = null;

	process = {id: null, process: false};

	isProcess = (id, is) => {
		this.process =  {id: id, is: is};
	};

	get itemsDetailed() {
		return this.items.map(item => {
			let details = this.rootStore.products.item(item.id);
			return { ...details, ...item };
		})
	}

	get total() {
		return this.itemsDetailed.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);
	}

	inCart(id) {
		return this.items.some(item => item.id == id);
	}

	clean = async () => {
		this.isProcess = true;
		let response = await fetch(`${BASEURL}/cart/clean.php?token=${this.#token}`);
		let res = await response.json();
		// console.log('clean---',res);
		if (res) {
			this.items = [];
		}
	}

	change = async (id, cnt) => {
		this.isProcess(id, true);
		let response = await fetch(`${BASEURL}/cart/change.php?token=${this.#token}&id=${id}&cnt=${cnt}`);
		let res = await response.json();
		// console.log('change---',response);
		if (res) {
			let item = this.items.find(pr => pr.id == id);
			if (item !== undefined) {
				let detailts = this.itemsDetailed.find(item => item.id == id);
				item.cnt = Math.max(1, Math.min(detailts.rest, cnt));
			}
			this.isProcess(id, false);
		}
	}

	add = async (id) => {
		if (!this.inCart(id)) {
			this.isProcess(id, true);
			// let product = this.rootStore.products.item(id);
			let response = await fetch(`${BASEURL}/cart/add.php?token=${this.#token}&id=${id}`);
			let res = await response.json();
			if (res) {
				this.items.push({ id: id, cnt: 1 });
				this.isProcess(id, false);
			}
		}
	}

	remove = async (id) => {
		if (this.inCart(id)) {
			this.isProcess(id, true);
			let response = await fetch(`${BASEURL}/cart/remove.php?token=${this.#token}&id=${id}`);
			let res = await response.json();
			if (res) {
				this.items = this.items.filter(pr => pr.id !== id);
				this.isProcess(id, false);
			}
		}
	}

	load = async () => {
		let curToken = this.rootStore.storage.getItem('CART__TOKEN');
		let response = await fetch(`${BASEURL}/cart/load.php?token=${curToken}`);
		let { cart, needUpdate, token } = await response.json();
		if (needUpdate) {
			this.rootStore.storage.setItem('CART__TOKEN', token);
		}

		runInAction(() => {
			this.items = cart;
			this.#token = curToken;
		})
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
/*
change = (id, cnt) => {
	let product = this.items.find(pr => pr.id == id);

	if (product !== undefined) {
		product.cnt = Math.max(1, Math.min(product.rest, cnt));
	}
}
 */
/*
get total() {
	return this.items.reduce((sum, item) => {
		let product = this.rootStore.products.item(item.id);
		return sum + product.price * item.cnt;
	}, 0)
	// return this.products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);
}

remove = (id) => {
	this.items = this.items.filter(pr => {
		if (pr.id !== id) return pr;
		pr.cnt--;
		return pr.cnt == 0 ? false : pr;
	});
}

add = (id) => {
	if (this.inCart(id)) {
		let product = this.rootStore.products.item(id);
		this.items.forEach(item => {
			if (item.id == id && item.cnt < product.rest) {
				item.cnt++
			}
		});
	}
	else {
		this.items.push({id: id, cnt: 1})
	}
}
 */
