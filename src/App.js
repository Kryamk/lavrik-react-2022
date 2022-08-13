import React, {useState} from 'react';
import Counter from './Counter';
import useWindowSize from './useWindowSize';


export default function() {
	const size = useWindowSize();

	let [ maxTest, setMaxTest ] = useState(10);
	let setMaxTest5 = () => setMaxTest(5);




	return (
	<div className="some">
		<h1>min=-4 max=5</h1>
		<Counter min={-4} max={5}/>
		<hr />
		<h1>min=20,max=50</h1>
		<Counter min={20} max={50}/>
		<hr />
		<h1>min=1, max=10</h1>
		<Counter min={1} max={maxTest} />
		{/* <Counter min={1} max={maxTest} key={`1:${maxTest}`}/> */}
		<hr />

		<button type="button" onClick={setMaxTest5}>set 5</button>




		<p> {size.width}px / {size.height}px </p>
	</div>
	)
}
