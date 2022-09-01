import Products from "./products"
import Cart from "./cart"
import Order from "./order"

export default class RootStore {
	constructor() {
		this.storage = window.localStorage;

		this.products = new Products(this)
		this.cart = new Cart(this)
		this.order = new Order(this)
	}
}
