import { RECEIVE_ALL_USERS, RECEIVE_USER, RESET_USERS, CHANGE_USERS, DELETE_USER } from '../actions/user_actions';

const UsersReducer = (state, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            return Object.assign({}, state, action.user);
        case RESET_USERS:
            return action.users;
        case CHANGE_USERS:
            return action.users;
        case DELETE_USER:
            return {};
        default:
            return state;
    }
};

export default UsersReducer;