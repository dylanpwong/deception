import * as APIUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RESET_USERS = "RESET_USERS";
export const CHANGE_USERS = "CHANGE_USERS";
export const DELETE_USERS = "DELETE_USERS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const GAME_OVER = "GAME_OVER";

export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user: user
    }
}

export const receiveAllUsers = users => {
    return {
        type: RECEIVE_ALL_USERS,
        users: users
    };
};

export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user: user
    };
};

export const resetUsers = users => {
    return {
        type: RESET_USERS,
        users: users
    };
};

export const changeUsers = users => {
    return {
        type: CHANGE_USERS,
        users: users
    };
};

export const deleteUsers = () => {
    return {
        type: DELETE_USERS
    };
};

export const gameOver = () => {
    return {
        type: GAME_OVER
    };
};

// export const signup = userData => dispatch => {
//     return APIUtil.signup(userData).then((res) => {
//         dispatch(receiveUser(res))
//     });
// }

export const createUser = userData => dispatch => {
    return APIUtil.create(userData).then((res) => {
       return dispatch(receiveUser(res))
    });
}

export const getAllUsers = () => dispatch => {
    return APIUtil.index().then((res) => {
       return dispatch(receiveAllUsers(res))
    });
};

export const reset = () => dispatch => {
    return APIUtil.reset().then((res) => {
        dispatch(resetUsers(res))
    });
};

export const updateUsers = () => dispatch => {
    return APIUtil.roles().then((res) => {
       return dispatch(changeUsers(res))
    });
};

export const deleteUser = () => dispatch => {
    return APIUtil.deleteUser().then(() => {
        dispatch(deleteUsers())
    });
};

export const endGame = () => dispatch => {
    return APIUtil.gameOver().then(() => {
        dispatch(gameOver())
    });
};
