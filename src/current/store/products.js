import { makeAutoObservable, runInAction } from "mobx";

const BASEURL = 'http://faceprog.ru/reactcourseapi';

export default class Products {
	products = [];
	some = 1;

	item(id) {
		// console.log('item');
		return this.products.find(pr => pr.id == id);
	}

	async load() {
		let response = await fetch(`${BASEURL}/products/all.php`);
		let products = await response.json();
		runInAction(() => {
			this.products = products;
		})
	}

	constructor(rootStore) {
		makeAutoObservable(this);
		this.rootStore = rootStore;
	}
}

/* function productsStub() {
	return [
		{
			id: 100,
			title: 'Ipnone 200',
			price: 12000,
			rest: 10,
		},
		{
			id: 101,
			title: 'Samsung AAZ8',
			price: 22000,
			rest: 5,
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 2,
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 8,
		}
	];
} */

// export default new Cart();


/*
если синхронно действия выполняются
proxy
	action() {
		block render
		this.some = 2;
		this.some = 3;
		this.some = 4;
		this.some = 5;
		this.some = 6;
		this.some = 7;
		unblock render
	}
 */
