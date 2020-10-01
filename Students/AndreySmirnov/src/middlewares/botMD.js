import {SEND_MESSAGE, sendMessage} from "../store/actions/messagesAction";

export default store => next => action => {
    switch (action.type){
        case SEND_MESSAGE:
           if (action.sender !== 'bot') {
               setTimeout(()=>{
                   return store.dispatch(sendMessage('bot'))
               },500)
           }
    }
    return next(action)
}