
import './style.css';
import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Item from '../ChatListItem/ChatListItem.jsx';
import {bindActionCreators} from "redux";
import {sendMessage} from "../../store/actions/messages-actions";
import {connect} from "react-redux";

class ChatList extends Component {
    render() {
        return (
            <Fragment>
                <div className="ChatList d-flex flex-column ml-3">
                    <List>
                        <Link to = '/chat/1'>
                            <Item name="Chat 1" selected={this.props.chatId === 1} />
                        </Link>
                        <Link to = '/chat/2'>
                            <Item name="Chat 2" selected={this.props.chatId === 2} />
                        </Link>
                        <Link to = '/chat/3'>
                            <Item name="Chat 3" selected={this.props.chatId === 3} />
                        </Link>
                    </List>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chatId: chatReducer.activeChatId,
});

export default connect(mapStateToProps)(ChatList);
