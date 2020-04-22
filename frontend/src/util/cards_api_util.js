import axios from 'axios';

export const index = () => {
    return axios.get('/api/cards/index');
};

export const start = () => {
    return axios.get('/api/cards/start');
};
