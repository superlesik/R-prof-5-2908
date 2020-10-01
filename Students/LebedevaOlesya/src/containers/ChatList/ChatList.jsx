import './style.css';
import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import ChatsDialog from '../../components/ChatsDialog/ChatsDialog.jsx';
import { Link } from 'react-router-dom';
import { List } from 'material-ui/List';
import Item from '../../containers/ChatListItem/ChatListItem.jsx';
import PropTypes from "prop-types";
import { TextField, FloatingActionButton } from 'material-ui';
import { addChat } from '../../store/actions/chatActions.js';
import { loadChats } from '../../store/actions/chatActions.js';
import { push } from 'connected-react-router';

class ChatList extends Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
        // chatId: PropTypes.number.isRequired,
        // sendMessage: PropTypes.func.isRequired,
        // isLoading: PropTypes.bool.isRequired,
    };

    handleNavigate = (link) => {
        this.props.push(link);
    }

    render() {
        const  { chats, addChat, chatLink } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
                <Link 
                    key = { chatId } 
                    onClick={ () => this.handleNavigate( `/chat/${chatId}` ) }>  
                    <Item name={`${chats[chatId].title}`} />
                </Link>));
        return (
            <div className="ChatList d-flex flex-column">
               <List className='list' ref={ chatLink } >
                    { chatElements }
                </List>
                <div>
                    <ChatsDialog chats={ chats } addChat = { chatName => { addChat(chatName) } }  />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    chatLink: chatReducer.chatLink,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(ChatList);