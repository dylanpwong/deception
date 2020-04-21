import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import CardsReducer from './cards_reducer';
import EventsReducer from './events_reducer';

export default combineReducers({
    users: UsersReducer,
    cards: CardsReducer,
    events: EventsReducer
});