import React from 'react'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class homeMapCmp extends Component {
    render() {
        return (
            <div className="FormCenter">
                const position = [59.6099, 16.5448]
                const map = (
                <Map center={position} zoom={13}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={position}>
                        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                    </Marker>
                </Map>)
            </div>
        );
    }

}
export default homeMapCmp;
