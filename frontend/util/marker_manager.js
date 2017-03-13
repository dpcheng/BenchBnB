export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  _benchesToAdd(benches) {
    return benches.filter(bench => !this.markers.includes(bench));
  }

  _createMarkerFromBench(bench) {
    const LatLng = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position: LatLng,
      title: bench.description
    });
    marker.setMap(this.map);
    this.markers.push(marker);
  }

  updateMarkers(benches) {
    let benchesArr = Object.keys(benches).map(id => benches[id]);
    this._benchesToAdd(benchesArr).forEach(bench => {
      this._createMarkerFromBench(bench);
    });
  }
}
