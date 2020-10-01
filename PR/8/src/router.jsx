import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Router extends React.Component {
    render() {
        let { chats } = this.props;

        let routesArr = chats.map(ch => <Route exact path = {`/chat/${ch.id}/`} render = { () => <Layout chatTitle = { ch.title }  /> } />)

        return (
            <Switch>
                <Route exact path = '/' component = { Layout } />
                {/* <Route exact path = '/chat/1/' render = { () => <Layout chatId = { 1 } /> } />
                <Route exact path = '/chat/2/' render = { () => <Layout chatId = { 2 } /> } />
                <Route exact path = '/chat/3/' render = { () => <Layout chatId = { 3 } /> } /> */}
                { routesArr }
            </Switch>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Router);