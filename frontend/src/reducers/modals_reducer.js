export default (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case 'start':
            return 'start';
        case 'win':
            return 'win';
        case 'CLOSE_MODAL':
            return null;
        default:
            return state;
    }
}