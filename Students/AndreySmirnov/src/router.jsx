import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout.jsx";
import {connect} from "react-redux";

class Router extends React.Component {
    render() {

        const chats = this.props.chats;
        const routesArray = chats.map(chat => <Route exact path={`/chat/${chat.id}`} key={chat.id} render={() => <Layout
            chatId={chat.id}/>}/>)

        return (
            <Switch>
                <Route exact path='/' component={Layout}/>
                {routesArray}
            </Switch>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chats: state.chatsReducer.chats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)