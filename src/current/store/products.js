import { makeAutoObservable } from "mobx";

export default class Products {
	products = productsStub();

	constructor(rootStore) {
		makeAutoObservable(this);
		this.rootStore = rootStore;
	}
}


function productsStub() {
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
}


// export default new Cart();
