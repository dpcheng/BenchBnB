export const UPDATE_FILTER = "UPDATE_FILTER";
import { fetchBenches } from './bench_actions';

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_FILTER,
    filter,
    value
  });
  return fetchBenches(getState().filters)(dispatch);
};
