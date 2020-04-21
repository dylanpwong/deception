import axios from 'axios';

export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const create = (userData) => {
    return axios.post('/api/users/create', userData);
};

export const index = () => {
    return axios.get('/api/users/index');
};

export const reset = () => {
    return axios.patch('/api/users/reset');
};

export const roles = () => {
    return axios.patch('/api/users/roles');
};

export const deleteUser = () => {
    return axios.delete('/api/users/delete');
};