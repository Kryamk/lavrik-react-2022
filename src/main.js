import React from 'react';
import ReactDom from 'react-dom';

import UserCard from './UserCard';

ReactDom.render(
	<div className="some">
		<h2>Hello World!</h2>
		<hr />
		<UserCard name="Ivan" text="Hi there!" title="title555" />
		<UserCard name="Anny" text="Hi there!" />
		<UserCard name="Kryamk" text="Hi there!" />
		<hr />
		<div>Footer</div>
	</div>,
	document.querySelector('.app')
);

// 1 video
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



// 2 video
/*

















*/
