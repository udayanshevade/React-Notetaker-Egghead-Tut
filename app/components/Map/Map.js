import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.loadMap = this.loadMap.bind(this);
    this.searchPlace = this.searchPlace.bind(this);
    this.setPlace = this.setPlace.bind(this);
    this.setMarker = this.setMarker.bind(this);
  }
  loadMap() {
    if (this.props && this.props.google) {
      const loc = this.props.location;

      const mapContainer = ReactDOM.findDOMNode(this.refs.map);

      const settings = {
        scrollwheel: false,
        disableDefaultUI: true,
        zoom: 14
      };

      this.map = new this.props.google.maps.Map(mapContainer, settings);

      this.infowindow = new this.props.google.maps.InfoWindow();
    }
  }
  searchPlace(loc) {
    const service = new this.props.google.maps.places.PlacesService(this.map);
    service.textSearch({ query: loc }, this.setPlace);
  }
  setPlace(results, status) {
    if (status == this.props.google.maps.places.PlacesServiceStatus.OK) {
      this.setMarker(results[0]);
    }
  }
  setMarker(placeData) {
    const self = this;

    const lat = placeData.geometry.location.lat();
    const lng = placeData.geometry.location.lng();
    const name = placeData.formatted_address;

    this.map.setCenter({lat: lat, lng: lng})

    this.marker = new google.maps.Marker({
      map: this.map,
      position: placeData.geometry.location,
      title: name,
      animation: google.maps.Animation.DROP
    });

    this.marker.addListener('click', () => {
      this.infowindow.open(this.map, this.marker);
    });
    this.infowindow.setContent(name);

  }
  componentDidMount() {
    this.loadMap();
  }
  componentWillReceiveProps(nextProps) {
    if (this.marker) {
      this.marker.setMap(null);
    }
    this.searchPlace(nextProps.location);
  }
  render() {
    return (
      <div id="mapContainer" ref="map"></div>
    );
  }
};

export default Map;