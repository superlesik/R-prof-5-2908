import { SEND_MSG, sendMessage } from '../store/actions/messages-actions.js';

export default store => next => action => {
    switch (action.type) {
        case SEND_MSG: {
            if (action.sender == 'Darth Vader') {
                setTimeout(() => {
                    return store.dispatch(sendMessage('Lalala-tralala', 'Bot'))
                }, 500)
            }
        }
    }
    return next(action)
}