import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';
import { ConnectedRouter } from 'connected-react-router';
import Router from './Router.jsx';
import { Provider } from 'react-redux';
import initStore from './store/index.js';
import { history } from './store';
import { PersistGate } from 'redux-persist/es/integration/react';

const container = document.getElementById('app');
const { store, persistor } = initStore();

ReactDom.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor } >
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    container,
 );