import React from 'react';
import ReactDom from 'react-dom';

import UserCard from './UserCard';
import CounterClass from './CounterClass';
import CounterFn from './CounterFn';

ReactDom.render(
	<div className="some">
		<h2>Hello World!!!</h2>
		<hr />

		<UserCard name="Ivan" text="Hi there!" title="title555" />
		<UserCard name="Anny" text="Hi there!" />
		<UserCard name="Kryamk" text="Hi there!" />
		<hr />

		<h3>Class min=1 max=3</h3>
		<CounterClass max={3} min={1} test1= "foo" test2 = {555} test3 = {true} />
		<hr />

		<h3>Fn min=0 max=5</h3>
		<CounterFn max={5}/>
		{/* <CounterFn/> */}
		<hr />

		<div>Footer</div>
	</div>,
	document.querySelector('.app')
);

// 1-1 VIDEO
/*
	Каждый элемент JSX является просто синтаксическим сахаром для вызова React.createElement().
	React.createElement( type, [props], [...children] )
	Типизированный аргумент может быть либо строкой имени тега (например, 'div' или 'span'), либо типом компонента React (класс или функция), либо фрагментом React.
	<UserCard /> -> React.createElement(UserCard, {name: 'Ivan', text: "Hi there!"}, [] );

	React.createElement('div', { className: 'some'}, [
		React.createElement('h2', {}, ['Hello, World!']),
		React.cloneElement('hr'),
		React.createElement('div', {}, ['Text'])
	])

	Для <></> <React.Fragment><React.Fragment/>

	Одиночные теги должны быть закрыты

	Компоненты с большой буквы, а так подумает что тэг

	Return можно и на этой строке, но для удобства оборачивается в круглые скобки

	Компонентный подход. Props - для передачи данных из одного компонента в другой

	function UserCard(props) { --- function UserCard( {name, text } ) {} // с деструкторизацией

	Варианты экспорта
		export default function UserCard(props) {}
		export default function (props) {}
		export default UserCard;

	Контекст some или window
		let some = { fn(){} };
		some.fn();
		let { fn } = some;
		fn();


	С 2019 появились хуки. Функционально-хуковый подход
*/



// 1-2 VIDEO
/*
	export default class extends React.PureComponent // Хуки типа shouldComponentUpdate уже реализовано, не будет лишний раз рендерится

	onClick
	onDoubleClick
	onChange -> input , любое изменение символов в поле
	Не понятно как подписаться на нативное событие change
	В js onchange - при потери фокуса
	keydown keyup - клавиатура без учета мышки (клик с зажатой клавишой)

	Не можешь в input передать value не подписавшись на onChange, ты тогда должен сделать input редонга?
	те инпуты либо полностью контролируемые либо полностью нет
	https://www.mousedc.ru/learning/510-inputy-steytakh-react/
	https://stackoverflow.com/questions/41736213/why-cant-i-change-my-input-value-in-react-even-with-the-onchange-listener
	https://qna.habr.com/q/524436

	Выделил hr снизу вверх

	https://redux-toolkit.js.org/ доп бибилиотека помогает с redux, убирает однотипный код
	Место где лежит состояние приложения, которое нужно разным компонентам. (список товаров в корзине)

	HOMEWORK
	Тренажер: https://webdevskills.com/ admir - логин и пароль
	1. min max
	2. min max - должны быть по дефолту или обязательными для передачи. Нужна библиотека контролирующая входные параметры PropTypes
	3. <span>{current}</span> в input переделать, чтобы при вводе меняли








*/
