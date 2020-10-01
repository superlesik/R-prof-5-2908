import './style.css';

import React, { Component } from 'react';
import Message from '../Message/Message.jsx';

export default class FieldComp extends Component {

	render() {
		let { messages } = this.props;

		let contentArr = messages.map((msg, index) => {
			let { text, sender } = msg;
			return <Message text = { text } sender = { sender } key = { index }/>
		});

		return (
			<div className="message-field">
				{ contentArr }
			</div>
		)
	}
}