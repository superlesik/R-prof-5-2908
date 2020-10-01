import './style.css';
import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import { TextField, Fab as FloatingActionButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from '../../components/Message/Message.jsx';
import { Link } from 'react-router-dom';
import PortraitOutlinedIcon from '@material-ui/icons/PortraitOutlined';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

class Header extends Component {
    static propTypes = {
        // chats: PropTypes.object.isRequired,
        chatId: PropTypes.number.isRequired,
        // isLoading: PropTypes.bool.isRequired,
    };
    
    static defaultProps = {
        chatId: 1,
    };
    
    render () {
        const { name } = this.props.profileDate
        return (
            <Fragment>
                <div className="Header w-100 col-12">
                    <div className="chatName"> 
                        Чат-комната: { this.props.chatId }
                    </div>
                    <div className="header-profile">
                        <PortraitOutlinedIcon style={ { width: '1.5em', height: '1.5em' } } />
                        <Link to="/profile">{ name }</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ profileReducer }) => ({ 
    profileDate: profileReducer.profileDate,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);