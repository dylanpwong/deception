import Game from "./game";
import { connect } from 'react-redux';
import { getAllUsers, updateUsers } from "../../actions/user_actions";
import { getAll, getCards } from '../../actions/card_actions';
import { getEvent } from '../../actions/event_actions';

const mapStateToProps = state => {
     if (Object.values(state.cards).length > 0) {
        //  debugger
       return {
         users: Object.values(state.users),
         cards: Object.values(state.cards),
         event: Object.values(state.events)
       };
     } else {
       return {};
     }  
}


const mapDispatchToProps = dispatch => ({
    fetchAll: () => dispatch(getAll()),
    updateUsers: () => dispatch(updateUsers()),
    fetchCards: () => dispatch(getCards()),
    fetchEvent: () => dispatch(getEvent())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
