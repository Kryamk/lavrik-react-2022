import React from 'react'
import { observer } from 'mobx-react-lite'
import useStore from '../hooks/useStore'

export default observer(function CartStore() {
	let [cartStore] = useStore('cart');

	return <>
		<div><strong>In Cart: {cartStore.items.length}</strong></div>
		<div><strong>Total: {cartStore.total}</strong></div>
	</>
});
