import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {NavLink} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

const ChatList = (props) => {

    const setChat = (chatId) => {
        props.setCurrentChat(chatId);
    }

    const chatsArray = props.chats;

    const linksArr = chatsArray.map(chat =>
        <div className='chat' key={chat.id}>
            <NavLink to={`/chat/${chat.id}`}>
                <ListItem
                    onClick={() => setChat(chat.id)}
                    primaryText={chat.title}
                    rightIcon={<CommunicationChatBubble/>}
                />
            </NavLink>
            <NavLink to='/'>
                <IconButton aria-label="delete" className='chatsList__delete'
                            onClick={() => props.deleteChat(chat.id, chat.title)}>
                    <DeleteIcon fontSize="small"/>
                </IconButton>
            </NavLink>
        </div>
    )

    return (
        <div>
            <List className="chatsList">
                <Subheader>Recent chats</Subheader>
                {linksArr}
            </List>
            <div className='addChat'>
                <div>Добавить чат</div>
                <Fab onClick={() => props.toggleContactList()} color="primary" aria-label="add"
                     style={{width: 30, height: 20}}>
                    <AddIcon/>
                </Fab>
            </div>
        </div>)
}

export default ChatList;