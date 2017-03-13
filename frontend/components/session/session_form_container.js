import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';

const processForm = (dispatch, ownProps) => {
  if (ownProps.location.pathname.slice(1) === 'login') {
    return (user => dispatch(login(user)));
  } else {
    return (user => dispatch(signup(user)));
  }
};

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname.slice(1)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: processForm(dispatch, ownProps)
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
