import { RECEIVE_CARDS } from '../actions/card_actions';

const CardsReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CARDS:
            return action.cards;
        default:
            return state;
    }
};

export default CardsReducer;