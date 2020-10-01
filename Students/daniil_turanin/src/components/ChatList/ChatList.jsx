import './style.css';
import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
import Item from '../ChatListItem/ChatListItem.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChatList extends Component {
	
	render() {
		let { chats } = this.props;

		let linksArr = chats.map(ch =>  <Link to = {`/chat/${ch.id}`}>
											<Item name={ ch.title } />
										</Link>)
		return (
			<Fragment>
				<div className="chatList d-flex flex-column">
					<List>
						{ linksArr }
					</List>
					<div>
						<ChatsDialog />
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = ({ chatReducer }) => ({
	chats: chatReducer.chats
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);