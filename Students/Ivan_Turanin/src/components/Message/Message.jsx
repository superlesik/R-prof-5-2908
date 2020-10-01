import './style.css';
import React from 'react';

export default props => {

	let { sender, text } = props;

	return (
		<div className="message"
			style={ { alignSelf: sender === 'Bot' ? 'flex-start' : 'flex-end'} }>
				
			{ sender && <strong>{ sender }</strong> }
			{ !sender && <strong className="userSender">User</strong> }
			{/*<p>{ sender || (!sender && text) ? text : 'Cyber answer...' }</p>*/}
			<p> { text } </p>

		</div>
	)
}