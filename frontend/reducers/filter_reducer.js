import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = {
  bounds: {}
};

const FilterReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      const newFilter = {
        [action.filter]: action.value
      };
      return merge({}, state, newFilter);
    default:
      return state;
  }
};

export default FilterReducer;
