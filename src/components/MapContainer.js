import React,{ Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };
  const mylocation = {
    lat:-26.241343,
    lng:27.928181
  }

export class MapContainer extends Component{
    
    render() {
        return(
            <Map
                google={this.props.google}
                zoom={13}
                styles={mapStyles}
                initialCenter={mylocation}
            >
                <Marker map={this.map} position={mylocation}/>
                
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCvKwQtNGQtHDXu6j1dqDxcfFhvHb32KYk'
  })(MapContainer);