import './style.css';

import React, { Component } from 'react';

export default class InputComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.props.send(this.state.text);
        }
    }

    sendM = () => {
        this.props.send(this.state.text);
    }

    render() {
        let { text } = this.state;

        return (
            <div className="controls d-flex">
                <input 
                    type="text" 
                    value = { this.state.text }
                    onChange = { this.handleChange }
                    onKeyUp = { this.handleChange }
                />
                <button onClick = { this.sendM }>Send</button>
            </div>
        )
    }
}