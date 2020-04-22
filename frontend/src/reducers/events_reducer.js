import { RECEIVE_EVENT } from '../actions/event_actions';
import { RECEIVE_ALL } from '../actions/card_actions';

const EventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EVENT:
            return Object.assign({}, state, action.event);
        case RECEIVE_ALL: 
            return action.all.events;
        default:
            return state;
    }
};

export default EventsReducer;