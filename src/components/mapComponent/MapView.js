import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './mapView.css';

//this should be in another file and come from a database with info
let markers = [
    {
        lat: 59.6099,
        lng: 16.5448,
        adress: "hello1",
        heat: 123,
        elec:345
    },
    {
        lat: 59.6098,
        lng: 16.5447,
        adress: "hejdå",
        heat: 123,
        elec:345
    },
    {
        lat: 59.6098,
        lng: 16.5446,
        adress: "h",
        heat: 123,
        elec:345
    },
    {
        lat: 59.6095,
        lng: 16.5447,
        adress: "helfer",
        heat: 123,
        elec:345
      },
      {
        lat: 59.6094,
        lng: 16.5445,
        adress: "huhwe",
        heat: 123,
        elec:345
      },
      {
        lat: 59.6096,
        lng: 16.5446,
        adress: "hdhewåoi",
        heat: 123,
        elec:345
      }
 ];

class MapView extends Component {
    constructor() {
        super()
        this.state = {  
            lat: 59.6099,
            lng: 16.5448,
            adress: "standard",
            heat: 123,
            elec:345,
            zoom: 12
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                {markers.map(mark => (
                    <Marker position={[mark.lat,mark.lng]}>
                        <Popup className="popup">
                            <h6><b>Adress:</b>{mark.adress}</h6>
                            <h6><b>Heat:</b>{mark.heat}</h6>
                            <h6><b>Electricity:</b>{mark.elec}</h6>
                        </Popup>
                    </Marker>
                ))}
                </Map>
            </div>
        );
    }
}

export default MapView;