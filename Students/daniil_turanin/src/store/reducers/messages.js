import update from 'react-addons-update';

import { SEND_MSG } from '../actions/messages-actions';

const storeMsg = {
	messages: [
		{
			sender: 'Bot',
			text: 'Hello, I,m React!'
		},
		{
			sender: 'Bot',
			text: 'Redux here too'
		}
	]
}

export default (store = storeMsg, action) => {
	switch(action.type) {
		case SEND_MSG: {
			let { text, sender } = action;
			let newMsg = { text, sender };
			//let arr = store.messages.push({text: action.text, sender: action.sender});
			return update(store, { messages: { $push: [newMsg] } })
		}

		default:
			return store;
	}
}