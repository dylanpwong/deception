import { RECEIVE_ALL_USERS, RECEIVE_USER, RESET_USERS, CHANGE_USERS, DELETE_USERS, GAME_OVER } from '../actions/user_actions';
import { RECEIVE_ALL } from '../actions/card_actions';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            // let newState={};
            // for(const user in action.users){
            //     newState[user.username]= action.user;
            // }
            return action.users;
        case RECEIVE_USER:
            return Object.assign({}, state, action.user);
        case RESET_USERS:
            return action.users;
        case CHANGE_USERS:
            let updatedUsers = {};
            // action.users.forEach(user => updatedUsers[user.username] = user)
            return updatedUsers;
        case DELETE_USERS:
            return {};
        case GAME_OVER:
            return {};
        case RECEIVE_ALL: 
            let newState2={};
            action.all.users.forEach(user => {
                newState2[user.username] = user
            });
            return newState2;
        default:
            return state;
    }
};

export default UsersReducer;