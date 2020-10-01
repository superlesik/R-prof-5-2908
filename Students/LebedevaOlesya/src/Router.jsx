import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout.jsx';
import Profile from './containers/Profile/Profile.jsx';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

export default class Router extends React.Component {
    // render() {
    //     let { chats } = this.props;

    //     let routesArr = Object.keys(chats).map(ch => <Route exact path = {`/chat/${ch.id}/`} render = { () => <Layout chatTitle = { ch.title }  /> } />)

    //     return (
    //         <Switch>
    //             <Route exact path = '/' component = { Layout } />
    //             { routesArr }   
    //         </Switch>
    //     )
    // }
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Layout } />
                <Route
                    exact
                    path='/chat/:chatId/'
                    render={ obj => <Layout chatId={ Number(obj.match.params.chatId) }/> }
                />
                 <Route
                    exact
                    path='/profile/'
                    render={ () => <Profile /> }
                />
            </Switch>
        )
    }
} 
// const mapStateToProps = ({ chatReducer }) => ({
//     chats: chatReducer.chats
// });

// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Router);