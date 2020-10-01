import {createStore, compose, applyMiddleware} from "redux";
import {reducers} from "./reducers";
import middlewares from '../middlewares';
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";

export const history = createBrowserHistory();

export const store = () => {
    return createStore(reducers(history), compose(applyMiddleware(routerMiddleware(history), ...middlewares)))}