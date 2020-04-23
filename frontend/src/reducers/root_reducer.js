import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import CardsReducer from './cards_reducer';
import EventsReducer from './events_reducer';
import CurrentUserReducer from './current_user_reducer';
import ModalsReducer from './modals_reducer'

export default combineReducers({
    users: UsersReducer,
    cards: CardsReducer,
    events: EventsReducer,
    currentUser: CurrentUserReducer,
    ui: ModalsReducer,
});