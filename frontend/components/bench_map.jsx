import React from 'react';
import MarkerManager from '../util/marker_manager.js';

class BenchMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    let that = this;
    google.maps.event.addListener(this.map, "idle", () => {
      let { north, east, south, west } = this.map.getBounds().toJSON();

      let bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      that.props.updateFilter("bounds", bounds);
    });
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render () {
    return (
      <div id='map-container' ref={ map => this.mapNode = map } >
      </div>
    );
  }

}

export default BenchMap;
