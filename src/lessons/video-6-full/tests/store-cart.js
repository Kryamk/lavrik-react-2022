import { Cart } from "./../store/cart";

let cartStore = new Cart();

console.log('---',cartStore.total);
console.log('---',cartStore.total === 54000);

cartStore.remove(100);
console.log('---',cartStore.total);
console.log('---',cartStore.total === 54000);

cartStore.change(101, 2);
console.log('---',cartStore.total);
