import React,{ Component } from 'react';
import MarkersOnMap from 'markers-on-map-react';

export class MapContainer extends Component{
    componentDidMount(){
        MarkersOnMap.Init({
            googleApiKey: 'AIzaSyBUV6KcfZOEDTkTMi0OZ1PcVL7QQHCL8U4',
            googlePlacesApiEnabled: true,
            googlePlacesContentButton: 'Get Directions', 
            mapZoomControl: true,
            mapWidth: '100%',
            mapHeight: '100vh',
            markerObjects: [
                {
                    markerLat:-26.241343,
                    markerLong:27.928181,
                    markerTitle: 'HOME',
                    markerContentFromGoogleQuery: '2027 Mota Street, Orlando East'
                },
                { 
                    markerLat: -26.321,
                    markerLong: 27.851,
                    markerTitle: 'LENASIA',
                    markerContentFromGoogleQuery: 'Lenasia' 
                },
                { 
                    markerLat: -26.116, 
                    markerLong: 28.003, 
                    markerTitle: 'RANDBURG', 
                    markerContentFromGoogleQuery: 'Randburg' 
                },
                { 
                    markerLat: -26.109, 
                    markerLong: 28.054, 
                    markerTitle: 'SANDTON', 
                    markerContentFromGoogleQuery: 'Sandton' 
                },
                { 
                    markerLat: -26.051, markerLong: 28.021, markerTitle: 'BRYANSTON', markerContentFromGoogleQuery: 'Byranston'  },
                { markerLat: -26.285, markerLong: 27.958, markerTitle: 'NATURENA', markerContentFromGoogleQuery: 'Naturena'}
            ]
        })
        MarkersOnMap.Run('div#GoogleMap');
    }
    

    render() {
        return(
            <div id='GoogleMap'></div>
        )
    }
}
export default MapContainer;