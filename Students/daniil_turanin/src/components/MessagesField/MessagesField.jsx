import './style.css';
import React, {Component} from 'react';

import FieldComp from '../FieldComp/FieldComp.jsx';
import InputMessage from '../InputMessage/InputMessage.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendMessage } from '../../store/actions/messages-actions';

class MessagesField extends Component {
	constructor(props) {
		super(props);
	}

	send = (text, sender = 'me') => {
		this.props.sendMessage(text, sender);
	}

	render() { 
		return (
			<div className="d-flex flex-column content message-field-wrapper">
				<FieldComp messages = { this.props.messages } />
				<InputMessage send = { this.send } />
			</div>
		)
	}
}

const mapStateToProps = ({ msgReducer }) => ({
	messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);