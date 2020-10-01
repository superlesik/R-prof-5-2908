import { ADD_PROFILE } from "../Actions/profileActions";

const initialStore = {
    profileDate: {
        name: 'Аристарх',
        gender: 'мужской',
        age: 30,
        interests: [ 'музыка', 'фильмы', 'гитары', 'фотографирование', 'политика', 'картоха' ]
    },
};

export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case ADD_PROFILE: {
            return;
        }
        default:
            return store;
    }
}

// case ADD_PROFILE: {
//     const profileDateId = Object.keys(store.profileDate).length + 1;
//     return update(store, {profileDate: { $merge: {[profileDateId]: {name: action.name} } },
//     });
// }