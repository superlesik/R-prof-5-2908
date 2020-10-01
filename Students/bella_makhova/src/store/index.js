import { createStore } from 'redux';
import initReducers from './reducers';

export default () => {
    // let initStore = { a: 100500 };
    // return createStore(initReducers, initStore)
    return createStore(initReducers, {});
}