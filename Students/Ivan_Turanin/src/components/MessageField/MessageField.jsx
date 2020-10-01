import './style.css';
import React, {Component, Fragment} from 'react';

import Message from '../Message/Message.jsx';

export default class MessagesField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			messages: [
				{
					sender: 'Bot',
					text: 'Hi, I am bot and you are learning React'
				}
			]
		}
	}

	sendMessage = () => {
		this.setState({
			text: '',
			messages: [...this.state.messages, {
				sender: this.props.name,
				text: this.state.text
			}]
		});
	}

	handleChange = event => {
		if (event.keyCode !== 13) {
			this.setState({ text: event.target.value });
		} else {
			this.sendMessage();
		}
		// this.setState({ text: event.target.value });
	}

	componentDidUpdate(prevProps, prevState) {
		let lastMsg = this.state.messages[this.state.messages.length - 1];
		if (prevState.messages.length < this.state.messages.length && lastMsg.sender !== 'Bot') {
			setTimeout(() => {
				this.setState({
					text: '',
					messages: [...this.state.messages, {
						sender: 'Bot',
						text: 'Hi, I am bot'
					}]
				})
			}, 1100)
		}
	}

	render() { 
		let { messages } = this.state;
		let contentArr = messages.map((msg, index) => {
			let { text, sender } = msg;
			return <Message text = { text } sender = { sender } key = { index }/>
		})

		return (
			<div className="d-flex flex-column content message-field-wrapper">
				<div className="messageField">
					{ contentArr }
				</div>
				<div className="controls d-flex">
					<input 
						type="text" 
						value = { this.state.text } 
						onChange = { this.handleChange } 
						onKeyUp = { this.handleChange }
						className="form-control form-control-lg input-message"
					/>
					<button 
						onClick = { this.sendMessage }
						className="btn btn-primary"
					>
						Send
					</button>
				</div>
			</div>
		)
	}
}