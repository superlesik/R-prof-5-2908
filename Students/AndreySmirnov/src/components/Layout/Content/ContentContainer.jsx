import React from 'react';
import {connect} from "react-redux";
import {deleteMessage, onTextChange, sendMessage, setCurrentChat} from "../../../store/actions/messagesAction";
import ChatList from "./ChatList/ChatList.jsx";
import NewMessage from "./MessageField/NewMessage.jsx";
import MessageField from "./MessageField/MessageField.jsx";
import ContactsContainer from "./Contacts/ContactsContainer.jsx";
import {toggleContactList} from "../../../store/actions/contactsActions";
import {deleteChat} from "../../../store/actions/chatsAction";
import StartedPage from "./MessageField/StartedPage.jsx";

class ContentContainer extends React.Component {

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.props.onTextChange(evt.target.value);
        } else {
            this.sendMessage();
        }
    }

    sendMessage = () => {
        this.props.addMessage(this.props.currentUser)
    }

    render() {

        return (
            <div className="content">
                <div className={this.props.isVisible ? 'content__contacts visible' : 'content__contacts invisible'}>
                    <ContactsContainer/>
                </div>
                <div className="content__chatList">
                    <ChatList chats={this.props.chats} setCurrentChat={this.props.setCurrentChat}
                              currentChat={this.props.currentChat} addChat={this.props.addChat}
                              toggleContactList={this.props.toggleContactList} deleteChat={this.props.deleteChat}/>
                </div>
                <div className='content__messageField'>
                    {this.props.chatId ?
                        <div className='content__message'>
                            <MessageField chatId={this.props.chatId} messages={this.props.messages}
                                          currentUser={this.props.currentUser}
                                          deleteMessage={this.props.deleteMessage}/>
                            <NewMessage newMessageText={this.props.newMessageText} handleChange={this.handleChange}
                                        sendMessage={this.sendMessage}/>
                        </div> :
                        <StartedPage currentUser={this.props.currentUser}/>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.msgReducer.messages,
        newMessageText: state.msgReducer.newMessageText,
        currentChat: state.msgReducer.currentChat,
        currentUser: state.loginReducer.currentUser,
        chats: state.chatsReducer.chats,
        isVisible: state.contactsReducer.isVisible,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (text) => {
            dispatch(onTextChange(text));
        },
        addMessage: (sender) => {
            dispatch(sendMessage(sender));
        },
        deleteMessage: (messageID) => {
            dispatch(deleteMessage(messageID))
        },
        setCurrentChat: (chatID) => {
            dispatch(setCurrentChat(chatID))
        },
        toggleContactList: () => {
            dispatch(toggleContactList())
        },
        deleteChat: (id, title) => {
            dispatch(deleteChat(id, title))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)