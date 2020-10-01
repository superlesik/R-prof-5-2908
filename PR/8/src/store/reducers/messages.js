import update from 'react-addons-update';

import { SEND_MSG, SUCCESS_MESSAGES_LOADING } from '../actions/messages-actions';

const storeMsg = {
    messages: []
}

export default (store = storeMsg, action) => {
    switch(action.type) {
        case SEND_MSG: {
            let { text, sender } = action;
            let newMsg = { text, sender };
            return update(store, { messages: { $push: [newMsg] } })
        }

        case SUCCESS_MESSAGES_LOADING: {
            console.log('messages', action.payload)
            return update(store, {
                messages: { $set: action.payload.messages }
            })
        }

        default: 
            return store;
    }
}