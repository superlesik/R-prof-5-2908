import './style.css';

import React, {Component} from 'react'
import {connect} from "react-redux";
import ChatsDialog from "../ChatsDialog/ChatsDialog.jsx";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="header d-flex align-items-center mt-1 mb-3">
                    <ChatsDialog />
                <Link to = '/profile' className="ml-3">{this.props.login}</Link>
            </div>
        )
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    login: profileReducer.login,
});

export default connect(mapStateToProps)(Header);
