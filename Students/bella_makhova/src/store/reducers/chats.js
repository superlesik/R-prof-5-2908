import update from 'react-addons-update';
import { SET_ACTIVE_CHAT } from "../actions/chats-actions";

const chatsInitial = {
    activeChatId: 1
}

export default (store = chatsInitial, action) => {
    switch(action.type) {
        case SET_ACTIVE_CHAT: {
            let { id } = action;
            return update(store, { activeChatId: { $set: id }})
        }

        default:
            return store;
    }
}
