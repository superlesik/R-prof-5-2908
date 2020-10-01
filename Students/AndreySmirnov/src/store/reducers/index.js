import {msgReducer} from './messages.js'
import {loginReducer} from "./login";
import {chatsReducer} from "./chats";
import {contactsReducer} from "./contacts";

import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";


export const reducers = (history) => combineReducers({
    loginReducer,
    msgReducer,
    chatsReducer,
    contactsReducer,
    router: connectRouter(history)
})