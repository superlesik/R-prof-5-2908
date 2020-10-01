import './style.css';

import React from 'react';
import { Component } from 'react';
import InputComp from '../CompInputTest/comp.jsx';
import FieldComp from '../CompFieldTest/comp.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import  { sendMessage } from '../../store/actions/messages-actions';

class MessageField extends Component {

    send = (text, sender = 'me') => {
        this.props.sendMessage(text, sender, this.props.chatId);
    }

    componentDidUpdate() {
        if (this.props.messages.length && this.props.messages[this.props.messages.length - 1].sender === 'me') {
            setTimeout(() =>
                    this.props.sendMessage(
                        'i\'m thinking...',
                        'bot',
                        this.props.chatId
                    ),
                700
            );
        }

    }

    render() {
        return (
            <div className="d-flex flex-column compField">
               <FieldComp messages = { this.props.messages } />
               <InputComp send = { this.send } />
            </div>
        )
    }
}

const mapStateToProps = ({ msgReducer, chatReducer }) => ({
    chatId: chatReducer.activeChatId,
    messages: msgReducer.messages[chatReducer.activeChatId]
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
