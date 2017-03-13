import SessionReducer from './session_reducer';
import benchesReducer from './benches_reducer';
import FilterReducer from './filter_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: SessionReducer,
  benches: benchesReducer,
  filters: FilterReducer
});

export default rootReducer;
