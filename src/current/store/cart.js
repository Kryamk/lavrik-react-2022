import { makeAutoObservable, runInAction, toJS } from "mobx";

// const BASEURL = 'http://faceprog.ru/reactcourseapi';

export default class Cart {

	items = []

	#token = null;

	idInProcess = [];

	isProcess = (id) => {
		return this.idInProcess.some(el => el === id);
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

	inCart = (id) =>{
		return this.items.some(item => item.id == id);
	}

	clean = async () => {
		// let response = await fetch(`${BASEURL}/cart/clean.php?token=${this.#token}`);
		// let res = await response.json();
		let res = await this.api.clean(this.#token);
		// console.log('clean---',res);
		if (res) {
			runInAction(()=>{
				this.items = [];
			});
		}
	}

	change = async (id, cnt) => {
		this.idInProcess.push(id);

		let item = this.items.find(pr => pr.id == id);

		if (item !== undefined) {
			let detailts = this.itemsDetailed.find(item => item.id == id);
			cnt = Math.max(1, Math.min(detailts.rest, cnt));
			// let response = await fetch(`${BASEURL}/cart/change.php?token=${this.#token}&id=${id}&cnt=${cnt}`);
			// let res = await response.json();
			let res = await this.api.change(this.#token, id, cnt);

			if (res) {
				runInAction(() => {
					item.cnt = cnt;
					this.idInProcess = this.idInProcess.filter(el => el !== id);
				})
			}
		}
	}

	add = async (id) => {
		if (!this.inCart(id) && !this.isProcess(id)) {
			this.idInProcess.push(id);
			// let product = this.rootStore.products.item(id);
			// let response = await fetch(`${BASEURL}/cart/add.php?token=${this.#token}&id=${id}`);
			// let res = await response.json();
			let res = await this.api.add(this.#token, id);
			runInAction(() => {
				if (res) {
					this.items.push({ id: id, cnt: 1 });
				}
				this.idInProcess = this.idInProcess.filter(el => el !== id);
			})

		}
	}

	remove = async (id) => {
		if (this.inCart(id) && !this.isProcess(id)) {
			this.idInProcess.push(id);
			// let response = await fetch(`${BASEURL}/cart/remove.php?token=${this.#token}&id=${id}`);
			// let res = await response.json();
			let res = await this.api.remove(this.#token, id);

			if (res) {
				runInAction(() => {
					this.items = this.items.filter(pr => pr.id !== id);
					this.idInProcess = this.idInProcess.filter(el => el !== id);
				})
			}
		}
	}

	load = async () => {
		let curToken = this.rootStore.storage.getItem('CART__TOKEN');
		// let response = await fetch(`${BASEURL}/cart/load.php?token=${curToken}`);
		// let { cart, needUpdate, token } = await response.json();
		let { cart, needUpdate, token }  = await this.api.load(curToken);
		if (needUpdate) {
			this.rootStore.storage.setItem('CART__TOKEN', token);
		}

		runInAction(() => {
			this.items = cart;
			this.#token = token;
		})
	}


	constructor(rootStore) {
		makeAutoObservable(this);
		this.rootStore = rootStore;
		this.api = this.rootStore.api.cart;

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
