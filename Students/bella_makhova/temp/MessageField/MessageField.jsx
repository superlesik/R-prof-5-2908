import './style.css';
import React, { Component } from 'react';

import Message from '../Message/Message.jsx';
import SignUp from '../SignUp/SignUp.jsx';

export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            text: '',
            messages: [
                // {
                //     sender: 'Alex',
                //     text: 'Hello'
                // },
                // {
                //     sender: 'John',
                //     text: 'Hi!'
                // },
                // {
                //     sender: 'Alex',
                //     text: 'Wtf'
                // },
                // {
                //     sender: 'John',
                //     text: 'LOL'
                // }
            ]
        }
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.sendMessage();
        }
    }

    sendMessage = () => {
        if (!!this.state.text)
            this.setState({
                text: '',
                messages: [...this.state.messages, {
                    sender: this.state.username,
                    text: this.state.text
                }
                ]
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.messages.length !== prevState.messages.length && this.state.messages.length % 2 === 1) {
            setTimeout(() =>
                this.setState({
                    text: '',
                    messages: [...this.state.messages, {
                        sender: 'bot',
                        text: this.state.username + ', i\'m thinking...'
                    }
                    ]
                }),
                700
            );
        }

    }

    handleSignUp(username) {
        this.setState({username})
    }

    render() {
        let { messages } = this.state;

        let contentArray = messages.map((msg, index) => {
            let { text, sender } = msg;
            return <Message text = { text } sender = { sender } key = { index }/>
        });

        let signUp = <SignUp onSignUp={(username) => this.handleSignUp(username)}/>;

        return (
            <div className="d-flex flex-column">
                { signUp }
                { !!this.state.username &&
                    <div>
                        <div>
                            { contentArray }
                        </div>
                        <div className="controls d-flex mt-3">
                            <input
                                type="text"
                                value = { this.state.text }
                                onChange = { this.handleChange }
                                onKeyUp = { this.handleChange }
                                autoFocus
                                placeholder="Message..."
                                className = "btn btn-outline-dark"
                            />
                            <button onClick = { this.sendMessage } type="button" className="btn btn-outline-dark ml-1">Send</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
    