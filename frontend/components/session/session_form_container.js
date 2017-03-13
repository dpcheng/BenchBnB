import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.currentUser),
  errors: state.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: {
    if (ownProps.formType === 'login') {
      return user => (
        dispatch(login(user))
      );
    } else {
      return user => (
        dispatch(signup(user))
      );
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
