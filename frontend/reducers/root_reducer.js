import SessionReducer from './session_reducer';
import benchesReducer from './benches_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: SessionReducer,
  benches: benchesReducer
});

export default rootReducer;
