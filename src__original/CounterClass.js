import React from 'react'

export default class extends React.Component{
	state = {
		current: 1
	}

	inc = () => {
		if(this.state.current < this.props.max){
			this.setState({ current: this.state.current + 1 });
		}
	}

	render(){
		return <div>
			<span>{ this.state.current }</span>
			<button type="button" onClick={ this.inc }>+</button>
		</div>
	}
}

/* 
onClick
onDoubleClick
onChange -> input 
*/