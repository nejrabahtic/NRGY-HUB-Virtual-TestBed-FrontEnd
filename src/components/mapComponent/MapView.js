import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './mapView.css';
import axios from 'axios';

class MapView extends Component {
    state = {
        zoom: 13,
        lat: 59.6238227,
        lng: 16.5495226,
        isLoading: true,
        meters: [],
        electricitycompany: false,
        heatcompany: false
    };

    async componentDidMount() {
        const response = await fetch('/meter/all');
        const body = await response.json();
        this.setState({ isLoading: false, meters: body });
    }

    render() {
        const { zoom, lat, lng, isLoading, meters } = this.state;
        const position = [lat, lng];

        if (isLoading) {
            return <p><center>Loading...</center></p>;
        }

        return (
            <div>
                <Map center={position} zoom={zoom}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    {meters.map(mark => (
                        <Marker key={mark.id} position={[mark.lat, mark.lon]}>
                            <Popup className="popup">
                                <h6><b>Address:</b> {mark.address}</h6>
                                <h6><b>Building Owner:</b> {mark.companyModel.name}</h6>
                                <h6><b>Heat:</b><div className="heat_label">{mark.user.heatcompany || mark.user.admin ? mark.heat : "No access"}</div></h6>
                                <h6><b>Electricity:</b><div className="elec_label">{mark.user.electricitycompany || mark.user.admin ? mark.elect : "No access"}</div></h6>
                            </Popup>
                        </Marker>
                    ))}
                </Map>
            </div>
        );
    }
}

export default MapView;