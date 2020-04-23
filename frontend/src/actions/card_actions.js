import * as APIUtil from '../util/cards_api_util';

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_ALL = "RECEIVE_ALL";

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
        // debugger
       return dispatch(receiveAll(res.data))
    });
}
