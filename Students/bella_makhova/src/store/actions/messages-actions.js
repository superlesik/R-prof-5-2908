export let SEND_MSG = '@@messages/SEND';

export let sendMessage = (text, sender, chatId) => ({
    type: SEND_MSG, text, sender, chatId
})
