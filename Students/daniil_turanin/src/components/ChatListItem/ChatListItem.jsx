import './style.css';
import React, {Component, Fragment} from 'react';

import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
//import ContentSend from '@material-ui/icons/Send';

export default class ChatListItem extends Component {

	render() {
		let { name } = this.props;
		return (
			<ListItem button>
				<ListItemText primary= { name } />
			</ListItem>
		)
	}
}