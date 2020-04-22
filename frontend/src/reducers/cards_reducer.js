import { RECEIVE_CARDS, RECEIVE_ALL } from '../actions/card_actions';

const CardsReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CARDS:
            return action.cards;
        case RECEIVE_ALL: 
            return action.all.cards
        default:
            return state;
    }
};

export default CardsReducer;