export let SEND_MSG = '@@messages/SEND';

export let sendMessage = (text, sender) => ({
	type: SEND_MSG, text, sender
})