import update from 'react-addons-update';
import {ON_USERNAME_CHANGE, SET_USER_NAME} from "../actions/loginActions";

const initialState = {
    currentUser: null,
    userName: '',
    loggedIn: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return update(state, {
                currentUser: {
                    $set: state.userName
                },
                loggedIn: {
                    $set: true
                }
            });

        case ON_USERNAME_CHANGE:
            return update(state, {
                userName: {
                    $set: action.newText
                }
            })

        default:
            return state
    }
}