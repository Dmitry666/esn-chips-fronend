import React from 'react';
import ReactDOM from 'react-dom';
//import { browserHistory } from 'react-router';

//import Routes from './routes';

import './index.css';

import App from './components/App';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'))

/*
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="/about" component={About} />
		<Route path="*" component={NotFound} />
	</Router>,
	document.getElementById('root')
);
*/