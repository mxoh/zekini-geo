import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      locations:[
        {lat:-26.241343, lng:27.928181},
        {latitude:-26.241343, longitude:27.928181},
        {latitude:-26.241343, longitude:27.928181},
        {latitude:-26.241343, longitude:27.928181}
      ]
    }
  }

  displayMaker = () => {
    return this.state.locations.map((location, index) => {
      return <Marker key={index} id={index} position={{
        lat: location.latitude,
        lng: location.longitude
      }}
      onClick={() => console.log('You clicked me!')} />
    })
  }

  render(){
    const mapStyles = {
      width: '100%',
      height: '100%'
    };
    const mylocation = {
      lat:-26.241343,
      lng:27.928181
    }

    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={mylocation}
      >
        {this.displayMaker}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCvKwQtNGQtHDXu6j1dqDxcfFhvHb32KYk'
  })(MapContainer);