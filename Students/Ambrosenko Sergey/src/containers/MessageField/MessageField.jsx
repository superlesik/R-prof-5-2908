import './style.css';
import PropTypes from "prop-types";
import React, { Component } from 'react';
import { TextField } from '@material-ui/core/';
import SendIcon from '@material-ui/icons/Send';
import Message from '../../components/Message/Message.jsx';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import CircularProgress from '@material-ui/core/CircularProgress';
import { sendMessage } from '../../Store/Actions/messageActions';
import { loadChats } from '../../Store/Actions/chatActions';

class MessageField extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.msgField = React.createRef();
    };

    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    state = {
        input: '',
    };

    handleSendMessage = () => {
        if (this.state.input.length > 0 || sender === 'Bot') {
            this.props.sendMessage('chat-' + this.props.chatId + '_' + (this.props.chats[this.props.chatId].messageList.length + 1) , this.state.input, 'Me', this.props.chatId);
        }
        this.setState({ input: '' });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { 
            this.handleSendMessage();
        }
    };

    componentDidMount() {
        // this.textInput.current.children[0].firstChild.focus();
        // this.textInput.current.children[0].firstChild.style.color = '#787878';
        this.props.loadChats();
    }

    componentDidUpdate() {
        // this.textInput.current.children[0].firstChild.focus();
        // this.msgField.current.scrollTop = this.msgField.current.scrollHeight;
    }
 
    render() {
        if (this.props.isLoading) {
            return <CircularProgress />
        }
        let messageElements;
        const { chatId, messages, chats } = this.props;
        if (Object.keys(messages).length != 0 && Object.keys(chats).length != 0) {
            messageElements = chats[chatId].messageList.map(messageId => (
                <Message
                    key={ messageId }
                    text={ messages[messageId].text }
                    sender={ messages[messageId].sender }
                />));
        }
 
        return [
            <div className="layout">
                <div key='messageElements' className="MsgField" ref={ this.msgField }>
                    { messageElements }
                </div>
                <div key='textInput' className="controls d-flex">
                    <TextField
                        name="input"
                        fullWidth={ true }
                        placeholder="Введите сообщение"
                        type="text"
                        ref={ this.textInput }
                        value={ this.state.input }
                        onChange={ this.handleChange }
                        onKeyUp={ this.handleKeyUp }
                    />
                    <button className="sendBtn" style={ { outline: 'none' } } onClick={ () => this.handleSendMessage() }>
                        <SendIcon style={ { fontSize: '1.4em' } } />
                    </button>
                </div>
            </div>
        ]
    }
}

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isLoading: messageReducer.isLoading,
});
 
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadChats }, dispatch);
 
export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
