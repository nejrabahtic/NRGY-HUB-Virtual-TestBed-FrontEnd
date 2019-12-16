import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './mapView.css';
import NavBar from '../navbar/navbar';
import SideBar from '../sidebar/sidebar';

class MapView extends Component {
    constructor() {
        super()
        this.state = {
            lat: 59.6099,
            lng: 16.5448,
            zoom: 12
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <NavBar></NavBar>
                <SideBar></SideBar>
                <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                <Marker position={position}>
                    <Popup>
                        Vasteras center
                    </Popup>
                </Marker>
                </Map>
            </div>
        );
    }
}

export default MapView;