import update from 'react-addons-update';
import { SEND_MESSAGE } from '../Actions/messageActions.js';
import { START_CHATS_LOADING, SUCCESS_CHATS_LOADING, ERROR_CHATS_LOADING } from '../Actions/chatActions.js';

const initialStore = {
    messages: {
        // 1: { text: "Баланс Вашего счета 5.35 руб.", sender: 'Bot' },
        // 2: { text: "Доступ к интернету заблокирован", sender: 'Bot' },
        // 3: { text: "Поздравляю! Вам одобрен кредит!", sender: 'Bot' },
    },
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
        //        isLoading: { $set: true },
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