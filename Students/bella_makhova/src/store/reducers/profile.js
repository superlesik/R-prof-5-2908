import update from 'react-addons-update';
import { SET_PROFILE } from "../actions/profile-actions";

const loginInitial = {
    login: "user02@gmail.com"
}

export default (store = loginInitial, action) => {
    switch(action.type) {
        case SET_PROFILE: {
            let { login } = action;
            return update(store, { login: { $set: login }})
        }

        default:
            return store;
    }
}
