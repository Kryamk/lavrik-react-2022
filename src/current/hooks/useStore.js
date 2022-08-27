import { useContext } from "react";
import storeContext from "../contexts/store";

export default function(...list) {
	let stores = useContext(storeContext);
	return list.map(name => stores[name])
}
