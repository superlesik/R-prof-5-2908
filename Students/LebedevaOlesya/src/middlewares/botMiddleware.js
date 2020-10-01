import { SEND_MESSAGE, sendMessage } from "../store/actions/messageActions.js";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'Me') {
                setTimeout(() =>
                {
                    const messages = store.getState().messageReducer.messages;
                    const key = Object.keys(messages)[Object.keys(messages).length - 1];
                    if (messages[key].sender === 'Me') {
                        store.dispatch(sendMessage(Object.keys(messages).length + 1, 'Не приставай ко мне, я робот!', 'Bot', action.chatId))
                    }
                }, 1000 )
            }
            if (action.sender === 'Me') {
                const span = store.getState().chatReducer.chatLink.current.children[action.chatId - 1];
                span.style.color = 'rgb(255, 255, 255)';
                let timerId = setTimeout(function tick() {
                    if (span.style.color == 'rgb(255, 255, 255)') {
                        span.style.color = 'rgb(214, 36, 95)';
                    } else {
                        span.style.color = 'rgb(255, 255, 255)';
                    }
                    timerId = setTimeout(tick, 500);
                }, 500);
                setTimeout(() => ( clearTimeout(timerId) ), 3500);
            }
    };
    return next(action)
}