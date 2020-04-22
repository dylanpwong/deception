import { connect } from 'react-redux';
import Loading from "./loading";
import { getAllUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
    // debugger
    if(Object.values(state.users).length > 0){
        return({
            users: Object.values(state.users.data)
        });
    }else{
        return({});
    }  
};


const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(getAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);