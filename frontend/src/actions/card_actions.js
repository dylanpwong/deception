import * as APIUtil from '../util/cards_api_util';

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_ALL = "RECEIVE_ALL";
export const DEALT_CARDS = "DEALT_CARDS";

export const receiveCards = cards => {
    return {
        type: RECEIVE_CARDS,
        cards: cards
    };
};

export const receiveAll = all => {
    return {
        type: RECEIVE_ALL,
        all: all
    };
};

export const receiveDealtCards = cards =>{
    return({
        type: DEALT_CARDS,
        cards: cards
    })
}

export const getHands = () =>dispatch =>{
    return APIUtil.getHands().then((res)=>{
        return dispatch(receiveCards(res))
    })
}

export const getCards = () => dispatch => {
    return APIUtil.index().then((res) => {
        dispatch(receiveCards(res))
    });
}

export const getAll = () => dispatch => {
    return APIUtil.start().then((res) => {
       return dispatch(receiveAll(res.data))
    });
}

export const dealHands = () => dispatch => {
    return APIUtil.dealHands().then((res) => {
       return dispatch(receiveDealtCards(res))
    }) 
}
