import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './mapView.css';
import { popup } from 'leaflet';

let markers = [
    {
        lat: 59.6099,
        lng: 16.5448,
        message: "hello1"
    },
    {
        lat: 59.6098,
        lng: 16.5447,
        message: "hejdå"
    },
    {
        lat: 59.6098,
        lng: 16.5446,
        message: "h"
    },
    {
        lat: 59.6095,
        lng: 16.5447,
        message: "helfer"
      },
      {
        lat: 59.6094,
        lng: 16.5445,
        message: "huhwe"
      },
      {
        lat: 59.6096,
        lng: 16.5446,
        message: "hdhewåoi"
      }
 ];

class MapView extends Component {
    constructor() {
        super()
        this.state = {
            lat: 59.6099,
            lng: 16.5448,
            message: "standrard",
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
                        <Popup>{mark.message}</Popup>
                    </Marker>
                ))}
                </Map>
            </div>
        );
    }
}

export default MapView;