export const DELETE_CHAT = '@@chats_DELETE_CHAT';

export const deleteChat = (id, title) => ({type:DELETE_CHAT, id, title});