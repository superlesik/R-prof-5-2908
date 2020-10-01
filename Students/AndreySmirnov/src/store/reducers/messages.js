import {DELETE_MESSAGE, ON_TEXT_CHANGE, SEND_MESSAGE, SET_CURRENT_CHAT} from "../actions/messagesAction";
import update from 'react-addons-update';
import {ADD_CHAT} from "../actions/contactsActions";

const initialState = {
    messages: {
        1: {messageList: [{id: 1, text: "Hi!", sender: 'bot'}]},
        2: {messageList: [{id: 1, text: "Hello!", sender: 'bot'}]},
        3: {messageList: [{id: 1, text: "Hi, hi, hi!", sender: 'bot'}]},
    },

    newMessageText: '',
    currentChat: 1

};

export const msgReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'bot') {
                const messagesList = state.messages[state.currentChat].messageList;
                let lastMessageId
                messagesList.length > 0 ? lastMessageId = Math.max(...messagesList.map(message => message.id)) : lastMessageId = 1
                const newMessage = {id: lastMessageId + 1, text: "Hi! I'm just a bot!", sender: action.sender};


                return update(state, {
                    messages: {
                        $merge: {
                            [state.currentChat]: {
                                messageList: [...messagesList, newMessage]
                            }
                        }
                    },
                });
            } else {
                const messagesList = state.messages[state.currentChat].messageList;
                let lastMessageId
                messagesList.length > 0 ? lastMessageId = Math.max(...messagesList.map(message => message.id)) : lastMessageId = 1
                const newMessage = {id: lastMessageId + 1, text: state.newMessageText, sender: action.sender};


                return update(state, {
                    messages: {
                        $merge: {
                            [state.currentChat]: {
                                messageList: [...messagesList, newMessage]
                            }
                        }
                    },
                    newMessageText: {
                        $set: ''
                    }
                });
            }

        case ON_TEXT_CHANGE:
            return update(state, {
                newMessageText: {
                    $set: action.newMessageText
                }
            })

        case SET_CURRENT_CHAT:
            return update(state, {
                currentChat: {
                    $set: action.chatId
                }
            })

        case ADD_CHAT:
            return update(state, {
                messages: {
                    $merge: {
                        [action.id]: {
                            messageList: [{id: 1, text: "Новый чат ", sender: 'bot'}]

                        }
                    }
                }
            })

        case DELETE_MESSAGE:
            const messagesList = state.messages[state.currentChat].messageList
            const slicedMessage = messagesList.findIndex(message => message.id === action.messageId)
            return update(state, {
                messages: {
                    $merge: {
                        [state.currentChat]: {
                            messageList: [...messagesList.slice(0, slicedMessage), ...messagesList.slice(slicedMessage + 1)]
                        }
                    }
                }
            })

        default:
            return state
    }
}