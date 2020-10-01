import './style.css';
import React from 'react';

export default class Message extends React.Component {
    render() {
        let { sender, text} = this.props;

        if ( text.length < 1 ) {
            return null;
        } else {
            return (
                <div className="msg d-flex" style={{ alignSelf: sender === 'Me' ? 'flex-end' : 'flex-start'}}>
                    <div className="message-text">{ text }</div>
                    <div className="message-sender">~{ sender }</div>
                </div>
            )
        }
    }
}  