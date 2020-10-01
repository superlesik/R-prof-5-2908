import { SEND_MSG, sendMessage } from '../store/actions/messages-actions.js';

export default store => next => action => {
	switch (action.type) {
		case SEND_MSG: {
			if (action.sender == 'me') {
				setTimeout(() => {
					return store.dispatch(sendMessage('I am robot', 'Bot'))
				}, 500)
			}
		}
	}
	return next(action)
}