import './style.css';

import React from 'react';
import { Component } from 'react';
import InputComp from '../CompInputTest/comp.jsx';
import FieldComp from '../CompFieldTest/comp.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import  { sendMessage, loadMessages } from '../../store/actions/messages-actions';

class MessageField extends Component {

    send = (text, sender = 'Darth Vader') => {
        this.props.sendMessage(text, sender);
    }

    componentDidMount() {
        this.props.loadMessages('c-1');
    }

    render() {
        // fetch('/api/chat/c-2').then(d => d.json()).then(data => { console.log(data) });
        return (
            <div className="d-flex flex-column">
               <FieldComp messages = { this.props.messages } />
               <InputComp send = { this.send } />
            </div>
        )
    }
}


const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);