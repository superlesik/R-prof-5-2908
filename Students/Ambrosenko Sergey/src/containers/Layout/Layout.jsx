import './style.css';
import PropTypes from "prop-types";
import React, { Component, Fragment } from 'react';
import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../Store/Actions/messageActions.js';

class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <Fragment>
                <Header chatId={ this.props.chatId } />
                <ChatList />
                <MessageField 
                    chatId={ this.props.chatId } 
                />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages,
 });

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);