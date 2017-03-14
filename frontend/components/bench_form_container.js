import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  lat: ownProps.location.query.lat,
  lng: ownProps.location.query.lat
});
