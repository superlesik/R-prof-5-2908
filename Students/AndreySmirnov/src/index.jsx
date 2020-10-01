import React from 'react';
import ReactDom from 'react-dom'
import './layout/css/styles.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from "./router.jsx";
import {Provider} from "react-redux";
import {store, history} from "./store";
import {ConnectedRouter} from "connected-react-router";


ReactDom.render(
    <Provider store={store()}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <Router/>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)
