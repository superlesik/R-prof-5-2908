
import './style.css';
import React, { Component, Fragment } from 'react';

import Message from '../Message/Message.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageField extends Component {
    constructor(props) {
        this.state = {
            text: '',
        }
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.sendMessage();
        }
        
        // /this.state.text = evt.target.value // NO REACTIVITY
    }

    sendMessage = () => {
        this.setState({ 
            text: '',
            messages: [...this.state.messages, {
                    sender: this.props.name,
                    text: this.state.text
                } 
            ]
        });
    }

    render() {
        let { messages } = this.props;
        console.log(messages)
        let contentArray = messages.map((msg, index) => {
            let { text, sender } = msg;
            return <Message text = { text } sender = { sender } key = { index }/>
        });


        return (
            <div className="d-flex flex-column">
                <div>
                    { contentArray }
                </div>
                <div className="controls d-flex">
                    <input 
                        type="text" 
                        value = { this.state.text }
                        onChange = { this.handleChange }
                        onKeyUp = { this.handleChange }
                    />
                    <button onClick = { this.sendMessage }>Send</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
