import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      locations:[
        {lat:-26.241343, lng:27.928181},
        {latitude: -26.321, longitude: 27.851},
        {latitude: -26.116, longitude: 28.003},
        {latitude: -26.109, longitude: 28.054},
        {latitude: -26.051, longitude: 28.021},
        {latitude: -26.285, longitude: 27.958}
      ]
    }
  }

  displayMaker = () => {
    return this.state.locations.map((location, index) => {
      return <Marker key={index} id={index} position={{
        lat: location.latitude,
        lng: location.longitude
      }}
      map={this.googleMap}
      onClick={() => console.log('You clicked me!')} />
    })
  }

  render(){
    const mapStyles = {
      width: '100%',
      height: '100%'
    };

    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
          lat:-26.241,
          lng:27.928
        }}
      >
        {this.displayMaker()}
      </Map>
    )
  }
};
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCvKwQtNGQtHDXu6j1dqDxcfFhvHb32KYk'
  })(MapContainer);