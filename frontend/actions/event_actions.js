import * as APIUtil from '../util/events_api_util';

export const RECEIVE_EVENT = "RECEIVE_EVENT";

export const receiveEvent = event => {
    return {
        type: RECEIVE_EVENT,
        event: event
    };
};

export const getEvent = () => dispatch => {
    return APIUtil.show().then((res) => {
        dispatch(receiveEvent(res))
    });
}