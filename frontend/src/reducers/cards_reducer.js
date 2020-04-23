import { RECEIVE_CARDS, RECEIVE_ALL, DEALT_CARDS } from '../actions/card_actions';

const CardsReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CARDS:
            return action.cards;
        case RECEIVE_ALL: 
            let cards = {};
            for(const ele in action.all.cards[0]){
                cards[ele] = action.all.cards[0][ele];
            }
            return cards;
        case DEALT_CARDS: 
            let dealtCards = {};
            for(const ele in action.cards[0]){
                dealtCards[ele] = action.cards[0][ele];
            }
            return dealtCards;
        default:
            return state;
    }
};

export default CardsReducer;