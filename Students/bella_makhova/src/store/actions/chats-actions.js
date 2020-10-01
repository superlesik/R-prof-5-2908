export let SET_ACTIVE_CHAT = '@@chats/SET';

export let setActiveChat = (id) => ({
    type: SET_ACTIVE_CHAT,
    id,
})
