import * as APIUtil from '../util/cards_api_util';

export const RECEIVE_CARDS = "RECEIVE_CARDS";

export const receiveCards = cards => {
    return {
        type: RECEIVE_CARDS,
        cards: cards
    };
};

export const getCards = () => dispatch => {
    return APIUtil.index().then((res) => {
        dispatch(receiveCards(res))
    });
}
