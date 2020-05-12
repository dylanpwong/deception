import Game from "./game";
import { connect } from 'react-redux';
import {  updateUsers } from "../../actions/user_actions";
import { getAll, getCards, getHands } from '../../actions/card_actions';
import { getEvent } from '../../actions/event_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
     if (Object.values(state.cards).length > 0) {
        //  debugger
       return {
         users: state.users,
         cards: Object.values(state.cards),
         event: state.events,
         currentUser: state.currentUser.data
       };
     } else {
       return {};
     }  
}


const mapDispatchToProps = dispatch => ({
    fetchAll: () => dispatch(getAll()),
    updateUsers: () => dispatch(updateUsers()),
    fetchCards: () => dispatch(getCards()),
    fetchEvent: () => dispatch(getEvent()),
    getHands: ()=> dispatch(getHands()),
    openModal: (arg) => dispatch(openModal(arg)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
