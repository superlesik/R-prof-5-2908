
        import './style.css';
        import React, { Component, Fragment } from 'react';
        import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
        import PropTypes from 'prop-types';

        import ChatList from '../ChatList/ChatList.jsx';
        import MessageField from '../Comp/Comp.jsx';

        export default class Layout extends Component {

            static propTypes = {
                chatId: PropTypes.number
            }

            static defaultProps = {
                chatId: 1
            }
        
            render() {
                
                return (
                    <StylesProvider>
                        <h1>Chat: { this.props.chatTitle }</h1>
                        <div className="d-flex w-100 justify-content-center">
                            <div>
                                <ChatList />
                            </div>
                            <div>
                                <MessageField name="12345"/>
                            </div>
                        </div>
                    </StylesProvider>
                )
            }
        }
    