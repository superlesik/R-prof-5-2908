import update from 'react-addons-update';
import { SUCCESS_CHATS_LOADING } from '../actions/chats-actions.js'

const storeChats = {
    chats: []
}

export default (store = storeChats, action) => {
    switch(action.type) {
        case SUCCESS_CHATS_LOADING: {
            console.log('from server', action.payload)
            return update(store, {
                chats: { $set: action.payload.chats }
            })
        }

        default: 
            return store;
    }
}