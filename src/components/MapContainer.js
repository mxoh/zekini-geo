import React,{ Component } from 'react';
import GoogleMapReact from 'google-maps-react';

class MapContainer extends Component{
    render() {
        return(
            <section className="col-8 h-lg">
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: '{}',
                        libraries: ['places', 'directions']
                    }}
                    defaultZoom={11}
                    defaultCenter={{lat:-26.241343, lng:27.928181}}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({map, maps}) => this.apiHasLoaded(map, maps)}
                >
                
                </GoogleMapReact>
            </section>
        )
    }
}

export default MapContainer;