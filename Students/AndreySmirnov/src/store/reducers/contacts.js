import update from "react-addons-update";
import {ADD_CHAT, TOGGLE_CONTACT_LIST_VISIBILITY} from "../actions/contactsActions";
import {DELETE_CHAT} from "../actions/chatsAction";

const initialState = {
    contacts: [
        {
            id: 4,
            name: 'John Barrowze'
        },
        {
            id: 5,
            name: 'Vasiliy Mikhailov'
        },
        {
            id: 6,
            name: 'Jon Jhonov'
        }
    ],

    isVisible: false
};

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_CONTACT_LIST_VISIBILITY:
            return update(state, {
                $merge:{
                    contacts: state.contacts,
                    isVisible: !state.isVisible
                }
            })

        case ADD_CHAT:
            const slicedContact = state.contacts.findIndex(contact=>contact.id===action.id)

            return update(state, {
                $merge:{
                    contacts: [...state.contacts.slice(0, slicedContact), ...state.contacts.slice(slicedContact+1)]
                }
            })

        case DELETE_CHAT:
            return update(state, {
                $merge: {
                    contacts: [...state.contacts, {id: action.id, name: action.title}]
                }
            })

        default:
            return state
    }
}