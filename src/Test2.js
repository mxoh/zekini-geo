import GoogleMapReact from 'google-maps-react';
import React,{ Component } from 'react';

class MapContainer extends Component {
    render() {
        const handleApiLoaded = map, maps => {

        }
        return(
            <div style={{height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    boostrapURLKeys={{
                        key: '{AIzaSyCvKwQtNGQtHDXu6j1dqDxcfFhvHb32KYk}',
                        libraries: ['places', 'direction']
                    }}
                    defaultZoom={11}
                    defaultCenter={{lat:-26.241, lng:27.928}}
                    yesIWantToUseGoogleApiInternals={true}
                    onGoogleApiLoaded={({map, maps}) => handleApiLoaded(map, maps)}
                >
                    <AnyReactComponent 
                        lat={-26.241343}
                        lng={27.928181} 
                        name='home'
                    />
                </GoogleMapReact>
            </div>
        )
    }
}

export default MapContainer;