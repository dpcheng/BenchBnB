import React from 'react';
import MarkerManager from '../util/marker_manager.js';
import { withRouter } from 'react-router';

class BenchMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    let that = this;
    google.maps.event.addListener(this.map, "idle", () => {
      let { north, east, south, west } = this.map.getBounds().toJSON();

      let bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      that.props.updateFilter("bounds", bounds);
    });

    google.maps.event.addListener(this.map, "click", () => {
      // TODO: 
    });
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render () {
    return (
      <div id='map-container' ref="map" >
      </div>
    );
  }

}

export default withRouter(BenchMap);
