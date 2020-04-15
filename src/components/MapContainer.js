import React,{ Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component{
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
          const mylocation = {
            lat:-26.241343,
            lng:27.928181
          }
        return(
            <Map
                google={this.props.google}
                zoom={13}
                style={mapStyles}
                initialCenter={mylocation}
            >
                <Marker position={mylocation} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCvKwQtNGQtHDXu6j1dqDxcfFhvHb32KYk'
  })(MapContainer);