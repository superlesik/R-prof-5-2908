import React, { Component } from 'react';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {
            isLoggedIn: false,
            username: '',
        };
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                </div>
            );
        }

        return (
            <div>
                <h3>What's your name?</h3>
                <input value={ this.state.username }
                       onChange={ this.handleChange }
                       onKeyUp = { this.handleChange }
                       autoFocus
                       className = "btn btn-outline-dark"/>
                <button
                    type="button"
                    onClick={ this.handleSignUp }
                    className="btn btn-outline-dark ml-1">
                    Enter
                </button>
            </div>
        );
    }

    handleChange = e => {
        if (e.keyCode !== 13) {
            this.setState({username: e.target.value});
        } else {
            this.handleSignUp();
        }
    }

    handleSignUp() {
        if (!!this.state.username) {
            this.setState({isLoggedIn: true});
            this.props.onSignUp(this.state.username);
        }
    }
}