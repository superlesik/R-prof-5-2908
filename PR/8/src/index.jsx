import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

// import MuiThemeProvider from '@material-ui/styles/ThemeProvider/'

// import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { Provider } from 'react-redux';
import { initStore, history } from './store';

import { ConnectedRouter } from 'connected-react-router';


const container = document.getElementById('app');
const theme = {};
ReactDom.render(
    <Provider store = { initStore() }>
        <ConnectedRouter history = { history }>
            <Router />
        </ConnectedRouter>
    </Provider>
    ,
    container
)
