import React from "react";
import MessageItem from "./MessageItem.jsx";

const MessageField = (props) => {
    const messages = props.messages[props.chatId].messageList;

    const ref = React.createRef()

    const messageItem = messages.map((msg, index) => {
        let {id, sender, text} = msg;
        return <MessageItem text={text} sender={sender} key={index} currentUser={props.currentUser} id={id}
                            deleteMessage={props.deleteMessage}/>
    });

    return (
        <div className='messages'>
            {messageItem}
        </div>
    )
}

export default MessageField