import './style.css';
import React, { Component, Fragment } from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../../components/Message/Message.jsx';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import CircularProgress from 'material-ui/CircularProgress';
import { sendMessage } from '../../store/actions/messageActions.js';
import { loadChats } from '../../store/actions/chatActions.js';
// import { loadMessages } from '../../store/actions/messageActions.js';

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
        // loadChats: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    handleSendMessage = () => {
        if (this.state.input.length > 0 || sender === 'bot') {
            this.props.sendMessage('chat-' + this.props.chatId + '_' + (this.props.chats[this.props.chatId].messageList.length + 1) , this.state.input, 'Me', this.props.chatId);
        }
        this.setState({ input: '' });
        // $(".message-field").scrollTop($(".message-field").prop("scrollHeight"));

    };

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Отправка сообщений по клавише Enter
            this.handleSendMessage();
        }
    };

    componentDidMount = () => {
        // this.textInput.current.focus();
        this.handleScroll();
        // fetch('../../srver/db/messages/messages.json').then(body => body.json()).then(json => { json.forEach(msg => { this.props.sendMessage(msg.id, msg.text, msg.sender, msg.chatId);})
        // });
        // this.props.loadMessages();
        this.props.loadChats();
    }

    componentDidUpdate = () => {
        // this.textInput.current.focus();
        this.handleScroll();
    }

    handleScroll = () => {
        const { index, selected } = this.props
        if (index === selected) {
          const that = this
          setTimeout(() => {
            that.msgField.current.scrollIntoView({ behavior: 'smooth' })
          }, 500)
        }
      }
    
    render() {
        if (this.props.isLoading) {
            return <CircularProgress />
        }

        let contentArray;
        const { chatId, messages, chats } = this.props;
        if (Object.keys(messages).length != 0 && Object.keys(chats).length != 0) {
            contentArray = chats[chatId].messageList.map(messageId => (
                <Message
                    key={ messageId }
                    text={ messages[messageId].text }
                    sender={ messages[messageId].sender }
                />));
        }

        return (
            <div className="layout-msg-field col-9 d-flex flex-column" key='contentArray'>
                <div className="message-field" ref={ this.msgField }>
                    { contentArray } 
                </div>
                <div className="controls d-flex pt-3 align-items-center align-self-end" key='textInput'  >
                    <TextField
                        id="standard-basic"
                        // ref={ this.textInput }
                        fullWidth={ true }
                        name="input"
                        autoFocus
                        hintText="Message"
                        type="text"
                        value={ this.state.input }
                        onChange={ this.handleChange}
                        onKeyUp={ this.handleKeyUp }
                    />
                    <FloatingActionButton
                        mini={true} style={{ boxShadow: 'none' }}
                        onClick={ () => this.handleSendMessage()} >
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isLoading: messageReducer.isLoading,
 });

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadChats }, dispatch);
 
export default connect(mapStateToProps, mapDispatchToProps)(MessageField);