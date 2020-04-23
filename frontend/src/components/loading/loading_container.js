import { connect } from 'react-redux';
import Loading from "./loading";
import { getAllUsers, updateUsers } from '../../actions/user_actions';
import { dealHands } from '../../actions/card_actions';

const mapStateToProps = state => {
    // debugger
    if(Object.values(state.users).length > 0){
        return({
            users: Object.values(state.users.data)
        });
    } else {
        return({});
    }  
};

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(getAllUsers()),
    updateUsers: () => dispatch(updateUsers()),
    dealCards: () => dispatch(dealHands())

});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);