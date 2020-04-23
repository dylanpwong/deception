import Splash from "./splash";
import { connect } from 'react-redux';
import { createUser, endGame } from '../../actions/user_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    createUser: (username) => dispatch(createUser(username)),
    endGame: () => dispatch(endGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);