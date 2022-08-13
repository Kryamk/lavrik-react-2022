import React from 'react';
import PropTypes from 'prop-types';


// export default class extends React.Component {
export default class CounterClass extends React.Component {
	state = {
		current: this.props.min
	}

	dec = () => {
		if (this.state.current > this.props.min) {
			this.setState({current: this.state.current - 1})
		}
	}
	inc = () => {
		if (this.state.current < this.props.max) {
			this.setState({current: this.state.current + 1})
		}
	}
	change = (e) => {
		if (e.target.value >= this.props.min && e.target.value <= this.props.max) {
			this.setState({current: e.target.value})
		}
	}
	render() {
		let {min} = this.props;
		let {max} = this.props;
		// console.log('--- min',min);
		// console.log('--- max',max);
		return <div>
			<button type="button" onClick={this.dec}>-</button>
			<span>{this.state.current}</span>
			<input type="text" placeholder="tut texter figach" value={this.state.current} onChange={this.change} />
			<button type="button" onClick={this.inc}>+</button>
		</div>
	}
}

CounterClass.defaultProps = {
	min: 1,
	// max: 3
}
CounterClass.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired,
};
