import React from 'react';
import {connect} from "react-redux";
import Login from "./Login.jsx";
import {onUserNameChange, setUser} from "../../../store/actions/loginActions";

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Login onUserNameChange={this.props.onUserNameChange}
                   setUser={this.props.setUser}
                   userName={this.props.userName}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.loginReducer.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserNameChange: (text) => {
            dispatch(onUserNameChange(text));
        },
        setUser: () => {
            dispatch(setUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)