import axios from 'axios';

export const show = () => {
    return axios.show('/api/users/show');
};

export const randomizeEvents = ()=>{
    return axios.post('/api/events/gameEvent')
}
