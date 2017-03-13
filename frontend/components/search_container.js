import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import { updateFilter } from '../actions/filter_actions';
import Search from './search';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
