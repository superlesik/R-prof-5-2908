import update from 'react-addons-update';
import {ADD_CHAT} from "../actions/contactsActions";
import {DELETE_CHAT} from "../actions/chatsAction";

const initialState = {
    chats: [
        {
            id: 1,
            title: 'Goga Gavrilov'
        },
        {
            id: 2,
            title: 'Jordan Kapustkin'
        },
        {
            id: 3,
            title: 'Viktor Immanuilov'
        }
    ]
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_CHAT:
            return update(state, {
                    $merge: {
                        chats: [...state.chats, {id: action.id, title: action.contactName}]
                }
            })

        case DELETE_CHAT:
            const slicedChat = state.chats.findIndex(chat=>chat.id===action.id)

            return update(state, {
                $merge:{
                    chats: [...state.chats.slice(0, slicedChat), ...state.chats.slice(slicedChat+1)]
                }
            })

        default:
            return state
    }
}