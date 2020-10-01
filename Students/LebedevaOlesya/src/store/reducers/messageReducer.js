import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions.js';
import { START_CHATS_LOADING, SUCCESS_CHATS_LOADING, ERROR_CHATS_LOADING } from '../actions/chatActions.js';

const initialStore  = {
    messages: {},
    isLoading: false,
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                messages: { $merge: { [action.messageId]: {text: action.text, sender: action.sender} } },
            });
        }
        // case START_MESSAGES_LOADING: {
        //     return update(store, {
        //         isLoading: { $set: true },
        //     });
        // }
        // case SUCCESS_MESSAGES_LOADING: {
        //     const messages = {};
        //     action.payload.forEach(msg => {
        //         const { text, sender } = msg;
        //         messages[msg.id] = { text, sender };
        //     });
        //     return update(store, {
        //         messages: { $set: messages },
        //         isLoading: { $set: false },
        //     });
        // }
        // case ERROR_MESSAGES_LOADING: {
        //     return update(store, {
        //         isLoading: { $set: false },
        //     });
        // }
        case START_CHATS_LOADING: {
            return update(store, {
               isLoading: { $set: true },
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                messages: { $set: action.payload.entities.messages },
                isLoading: { $set: false },
            });
        }
        case ERROR_CHATS_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
}     