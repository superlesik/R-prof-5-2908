
import './style.css';
import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Item from '../ChatListItem/ChatListItem.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadChats } from '../../store/actions/chats-actions.js';

class ChatList extends Component {
    componentDidMount() {
        this.props.loadChats();
    }

    render() {
        let {chats} = this.props; 

        let linksArr = chats.map(ch =>  <Link to = {`/chat/${ch.id}/`} key = { ch.id }>
                                            <Item name={ch.name} />
                                        </Link>)
        return (
            <Fragment>
                <div className="ChatList d-flex flex-column">
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

const mapDispatchToProps = dispatch => bindActionCreators({ loadChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);