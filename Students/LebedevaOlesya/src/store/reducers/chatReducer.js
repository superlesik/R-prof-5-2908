import React from 'react';
import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";
// import { START_CHATS_LOADING, SUCCESS_CHATS_LOADING, ERROR_CHATS_LOADING } from '../actions/chatActions.js';
import {SUCCESS_CHATS_LOADING } from '../actions/chatActions.js';

const initialStore = {
   chats: {},
   chatLink: React.createRef(),
   isLoading: true,
};

export default function chatReducer(store = initialStore, action) {
   switch (action.type) {
        case SEND_MESSAGE: {
           return update(store, {
               chats: { $merge: { [action.chatId]: {
                   title: store.chats[action.chatId].title,
                   messageList: [...store.chats[action.chatId].messageList, action.messageId]
               } } },
           });
        }

        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: action.payload.entities.chats },
                isLoading: { $set: false },});
        }

        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        title: action.title, 
                        messageList: []
                } } },
            });
         }
        // case START_CHATS_LOADING: {
        //     return update(store, {
        //        isLoading: { $set: true },
        //     });
        // }
        // case ERROR_CHATS_LOADING: {
        //     return update(store, {
        //         isLoading: { $set: false },
        //     });
        // }
       default:
           return store;
   }
}