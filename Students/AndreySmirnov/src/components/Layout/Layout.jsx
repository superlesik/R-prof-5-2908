import React from 'react'
import Header from "./Header/Header.jsx";
import {connect} from "react-redux";
import ContentContainer from "./Content/ContentContainer.jsx";
import LoginContainer from "./Login/LoginContainer.jsx";

class Layout extends React.Component {
    render() {
        return (<div>
            {!this.props.logInfo.loggedIn ? <div className='wrapperWelcome'>
                    <LoginContainer/>
                </div> :
                <div className='wrapper'>
                    <Header chatId={this.props.chatId} userName={this.props.logInfo.userName}/>
                    <ContentContainer chatId={this.props.chatId}/>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logInfo: state.loginReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)