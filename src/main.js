import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './current/App';
// import App from './lessons/video-3/App'; // Тотал цены, удаление товара, ленивый инпут на стейтах и рефах
// import App from './lessons/video-3-full/App'; // Подключение css, кастомные хуки





ReactDom.render(
	<App/>,
	document.querySelector('.app')
);
