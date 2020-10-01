import './style.css';
import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
//import ContentSend from '@material-ui/icons/Send';

export default class ChatList extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {

		return (
			<Fragment>
				<div className="chatList d-flex flex-column">
					<List component="nav">
						<Link to = '/chat/1'>
							<ListItem button>
								<ListItemText primary="Chat 1"/>
							</ListItem>
						</Link>
						<Link to = '/chat/2'>
							<ListItem button>
								<ListItemText primary="Chat 2"/>
							</ListItem>
						</Link>
						<Link to = '/chat/3'>
							<ListItem button>
								<ListItemText primary="Chat 3"/>
							</ListItem>
						</Link>
					</List>
					<div>
						<ChatsDialog />
					</div>
				</div>
			</Fragment>
		)
	}
}