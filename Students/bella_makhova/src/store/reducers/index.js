import { combineReducers } from 'redux';
import msgReducer from './messages';
import chatReducer from './chats';
import profileReducer from './profile';


export default combineReducers({ msgReducer, chatReducer, profileReducer })
