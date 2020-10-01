export const SEND_MESSAGE = '@@messages/SEND_MESSAGE'
export const ON_TEXT_CHANGE = '@@messages/ON_TEXT_CHANGE'
export const SET_CURRENT_CHAT = '@@messages/SET_CURRENT_CHAT'
export const DELETE_MESSAGE = '@@messages/DELETE_MESSAGE'


export const sendMessage = (sender) => ({type: SEND_MESSAGE, sender})
export const onTextChange = (text) => ({type: ON_TEXT_CHANGE, newMessageText: text})
export const setCurrentChat = (chatId) => ({type: SET_CURRENT_CHAT, chatId})
export const deleteMessage = (messageId) => ({type: DELETE_MESSAGE, messageId})