export const TOGGLE_CONTACT_LIST_VISIBILITY = '@@contacts_TOGGLE_CONTACT_LIST_VISIBILITY';
export const ADD_CHAT = '@@contacts/ADD_CHAT';

export const toggleContactList = () => ({type: TOGGLE_CONTACT_LIST_VISIBILITY});
export const addChat = (id, contactName) => ({type:ADD_CHAT, id, contactName});
