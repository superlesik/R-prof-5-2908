import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Profile from './components/Profile/Profile.jsx';

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path = '/' render = { () => <Layout chatId = { 1 } /> } />
                <Route exact path = '/profile' component={ Profile } />
                <Route exact path = '/chat/1/' render = { () => <Layout chatId = { 1 } /> } />
                <Route exact path = '/chat/2/' render = { () => <Layout chatId = { 2 } /> } />
                <Route exact path = '/chat/3/' render = { () => <Layout chatId = { 3 } /> } />
            </Switch>
        )
    }
}
