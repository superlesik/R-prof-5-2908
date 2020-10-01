import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import { StylesProvider } from '@material-ui/core/styles';

import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

import { Provider } from 'react-redux';
import { initStore, history } from './store';

import { ConnectedRouter } from 'connected-react-router';

const container = document.getElementById('app');

ReactDom.render(
	<Provider store = { initStore() }>
		<ConnectedRouter history = { history }>
			<StylesProvider>
				<Router />
			</StylesProvider>
		</ConnectedRouter>
	</Provider>,
	container
)