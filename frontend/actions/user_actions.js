import * as APIUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RESET_USERS = "RESET_USERS";
export const CHANGE_USERS = "CHANGE_USERS";
export const DELETE_USER = "DELETE_USERS";

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

export const signup = userData => dispatch => {
    return APIUtil.signup(userData).then((res) => {
        dispatch(receiveUser(res))
    });
}

export const createUser = userData => dispatch => {
    return APIUtil.create(userData).then((res) => {
        dispatch(receiveUser(res))
    });
}

export const getAllUsers = () => dispatch => {
    return APIUtil.index().then((res) => {
        dispatch(receiveAllUsers(res))
    });
};

export const reset = () => dispatch => {
    return APIUtil.reset().then((res) => {
        dispatch(reserUsers(res))
    });
};

export const updateUsers = () => dispatch => {
    return APIUtil.roles().then((res) => {
        dispatch(changeUsers(res))
    });
};

export const deleteUser = () => dispatch => {
    return APIUtil.deleteUser().then(() => {
        dispatch(deleteUsers())
    });
};