import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './current/App';
// import App from './lessons/video-3/App'; // Тотал цены, удаление товара, ленивый инпут на стейтах и рефах
// import App from './lessons/video-3-full/App'; // Подключение css, кастомные хуки
// import App from './lessons/video-4-1/App'; // 00:58 Кастомный хук onClickOutside, children,  bootstrap modal


ReactDom.render(
	<App/>,
	document.querySelector('.app')
);

/*
// Условное тестирование, когда можно передать дефолтные пропсы и контексты
import React from 'react';
import ReactDom from 'react-dom';
import MinMax from './current/MinMaxLazy';
import SettingContext from './current/contexts/settings';

let settings = { lang: 'en' };

ReactDom.render(
	<SettingContext.Provider value={settings}>
		<MinMax min={1} current={3} max={5} onChange={()=>{}} />
	</SettingContext.Provider>,
	document.querySelector('.app')
);
 */
