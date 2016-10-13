var React = require('react');
var ReactDOM = require('react-dom');

var Map = React.createClass({
  loadMap: function() {
    if (this.props && this.props.google) {
      const loc = this.props.location;

      var mapContainer = ReactDOM.findDOMNode(this.refs.map);

      const settings = {
        scrollwheel: false,
        disableDefaultUI: true,
        zoom: 14
      };

      this.map = new this.props.google.maps.Map(mapContainer, settings);

      this.infowindow = new this.props.google.maps.InfoWindow();
    }
  },
  searchPlace(loc) {
    const service = new this.props.google.maps.places.PlacesService(this.map);
    service.textSearch({ query: loc }, this.setPlace);
  },
  setPlace: function(results, status) {
    if (status == this.props.google.maps.places.PlacesServiceStatus.OK) {
      this.setMarker(results[0]);
    }
  },
  setMarker: function(placeData) {
    var self = this;

    var lat = placeData.geometry.location.lat();
    var lng = placeData.geometry.location.lng();
    var name = placeData.formatted_address;

    this.map.setCenter({lat: lat, lng: lng})

    this.marker = new google.maps.Marker({
      map: this.map,
      position: placeData.geometry.location,
      title: name,
      animation: google.maps.Animation.DROP
    });

    this.marker.addListener('click', function() {
      self.infowindow.open(self.map, this);
    });
    this.infowindow.setContent(name);

  },
  componentDidMount: function() {
    this.loadMap();
  },
  componentWillReceiveProps: function(nextProps) {
    if (this.marker) {
      this.marker.setMap(null);
    }
    this.searchPlace(nextProps.location);
  },
  render: function() {
    return (
      <div id="mapContainer" ref="map"></div>
    );
  }
});

module.exports = Map;