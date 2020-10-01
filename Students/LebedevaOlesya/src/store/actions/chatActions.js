import { RSAA, getJSON } from 'redux-api-middleware'
import { normalize } from 'normalizr';
import { chats } from '../../../server/controllers/schema.js';

export const START_CHATS_LOADING = '@@chats/START_CHATS_LOADING'
export const SUCCESS_CHATS_LOADING = '@@chats/SUCCESS_CHATS_LOADING'
export const ERROR_CHATS_LOADING = '@@chats/ERROR_CHATS_LOADING'
export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = (title) => ({
   type: ADD_CHAT,
   title,
});

export const loadChats = () => ({
    [RSAA]: {
       endpoint: '/server/db/chats/chats.json',
       method: 'GET',
       types: [
          START_CHATS_LOADING,
          {
             type: SUCCESS_CHATS_LOADING,
             payload: (action, state, res) => getJSON(res).then(
                json => normalize(json, [chats]),
             ),
          },
          ERROR_CHATS_LOADING,
       ],
    },
 });