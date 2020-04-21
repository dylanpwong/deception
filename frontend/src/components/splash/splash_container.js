import Splash from "./splash";
import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions'

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    createUser: (username) => dispatch(createUser(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);