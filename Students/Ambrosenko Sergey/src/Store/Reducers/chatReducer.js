import React from 'react';
import update from 'react-addons-update';
import { SEND_MESSAGE } from '../Actions/messageActions';
import { SUCCESS_CHATS_LOADING } from "../Actions/chatActions";
import { ADD_CHAT } from "../Actions/chatActions";

const initialStore = {
    chats: {
            // 1: { title: 'МТС', messageList: [1] },
            // 2: { title: 'Ростелеком', messageList: [2] },
            // 3: { title: 'Сбербанк', messageList: [3] },
        },
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
        // case SUCCESS_MESSAGES_LOADING: {
        //     const chats = {...store.chats};
        //     action.payload.forEach(msg => {
        //         const { id, chatId } = msg;
        //         chats[chatId].messageList.push(id);
        //     });
        //     return update(store, {
        //         chats: { $set: chats },
        //         isLoading: { $set: false },
        //     });
        // }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: action.payload.entities.chats },
                isLoading: { $set: false },
            });
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {chats: { $merge: {[chatId]: {title: action.title, messageList: []} } },
            });
        }
        default:
            return store;
    }
}