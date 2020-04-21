import axios from 'axios';

export const show = () => {
    return axios.show('/api/users/show');
};
