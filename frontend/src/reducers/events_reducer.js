import { RECEIVE_EVENT } from '../actions/event_actions';

const EventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EVENT:
            return Object.assign({}, state, action.event);
        default:
            return state;
    }
};

export default EventsReducer;