import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import BenchIndex from './bench_index';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
