
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

class Profile extends Component {
    render() {
        return (
            <div>
                {this.props.login}
            </div>
        )
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    login: profileReducer.login,
});

export default connect(mapStateToProps)(Profile);
