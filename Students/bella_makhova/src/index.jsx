import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

// import MessageField from './components/MessageField/MessageField.jsx';
// import ChatList from './components/ChatList/ChatList.jsx';
// import TestComp from './components/Comp/Comp.jsx';
import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

import MuiThemeProvider from '@material-ui/styles/ThemeProvider/'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { Provider } from 'react-redux';
import initStore from './store';

const container = document.getElementById('app');
const theme = {};
ReactDom.render(
    <Provider store = { initStore() }>
        <BrowserRouter>
            {/* <MuiThemeProvider theme = { theme }> */}
                <Router />
            {/* </MuiThemeProvider> */}
        </BrowserRouter>
    </Provider>
    ,
    container
)
