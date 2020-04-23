export default (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case 'OPEN_MODAL':
            return true;
        case 'CLOSE_MODAL':
            return null;
        default:
            return state;
    }
}