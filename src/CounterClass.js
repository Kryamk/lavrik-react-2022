import React from 'react';
import PropTypes from 'prop-types';


// export default class extends React.Component {
export default class CounterClass extends React.Component {
	state = {
		current: 1
	}

	incMinus = () => {
		if (this.state.current > this.props.min) {
			this.setState({current: this.state.current - 1})
		}
	}
	incPlus = () => {
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
			<button type="button" onClick={this.incMinus}>-</button>
			<span>{this.state.current}</span>
			<input type="text" placeholder="tut texter figach" value={this.state.current} onChange={this.change} />
			<button type="button" onClick={this.incPlus}>+</button>
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


/*
<button type="button" onClick={() => this.state.current++}>+</button> --- не работает, нужно вызывать метод setState
который изменит часть состояния и метод render перезапустит. В него передаём объект который мерджится с объектом в стейте

Для смены стейта нужно использовать setState

Два рабочих варианта. Контекст ибо. Первый не рекомендуют чтобы не пересоздавалась кнопка
	inc() {
		this.setState({current: this.state.current + 1})
	}
	<button type="button" onClick={()=>this.inc()}>+</button>

	inc = () => {
		this.setState({current: this.state.current + 1})
	}
	<button type="button" onClick={this.inc}>+</button>

В рендере контекст ссылается на текущий компонент (класс). Классы так работают?

Компоненты меняются если меняется их стейт или пропсы

Раньше делали как обертки например для изменения размера окна.

// console.log('---',this); //__webpack_exports__.default { context, props, refs, state, test, updater, _reactInternalInstance, _reactInternals }

<button type="button" onClick={() => this.state.current++}>+</button> --- не работает, нужно вызывать метод setState
<button type="button" onClick={() => this.setState({current: this.state.current + 1})}>+</button>

{this.test()}
// test = () => {
// 	console.log( typeof this.props.test3);
// }

Библиотека PropTypes для проверки типов https://ru.react.js.org/docs/typechecking-with-proptypes.html   TypeScript то нету

Компонент на основе класса пропсы принимает в конструктор. Конструктор базового класса React.Component выполняет это и мы получаем this.props.max

useState можно использовать несколько раз





*/
