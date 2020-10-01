import React from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const MessageItem = (props) => {

    let {sender, text, currentUser} = props;

    const ref = React.createRef()

    return (
        <div ref={ref} className='messageItem'
             style={{alignSelf: sender === currentUser ? 'flex-end' : 'flex-start'}}
        >
            <p><strong>{sender}:</strong> {text}</p>
            <IconButton aria-label="delete" className='chatsList__delete' onClick={()=>props.deleteMessage(props.id)}>
                <DeleteIcon fontSize="small"/>
            </IconButton>
        </div>
    )
}

export default MessageItem