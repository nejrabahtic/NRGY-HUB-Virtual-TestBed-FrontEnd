import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './mapView.css';
import { Tab } from 'react-bootstrap';

//this should be in another file and come from a database with info
let markers = [
    {
        lat: 59.644729,
        lng: 16.568723,
        adress: "Strömledningsgatan 15",
        buildingowner:"Möller Bil Västerås",
        heat: 23.0,
        elec:113373.0,
    },
    {
        lat: 59.644729,
        lng: 16.568723,
        adress: "Strömledningsgatan 15",
        buildingowner:"Audi",
        heat: 15009.0,
        elec:4.0,
    },
    {
        lat: 59.645672,
        lng: 16.567371,
        adress: "Strömledningsgatan 15",
        buildingowner:"Möller Bil Västerås",
        heat: 4670.0,
        elec: 0.0,
    },
    {
        lat: 59.642376,
        lng: 16.567339,
        adress: "Strömledningsgatan 6",
        buildingowner:"INGO",
        heat: 21165.0,
        elec: 0.0,
      },
      {
        lat: 59.642707,
        lng: 16.564034,
        adress: "Elledningsgatan 3",
        buildingowner:"Mazda Ove Andersson Bil",
        heat: 2454.0,
        elec: 0.0,
      },
      {
        lat: 59.641720,
        lng: 16.564560,
        adress: "Strömledningsgatan 11",
        buildingowner:"Bilia",
        heat: 5418.0,
        elec: 0.0,
      },
      {
        lat: 59.642459,
        lng: 16.561829,
        adress: "Friledningsgatan 8",
        buildingowner:"Beijer Byggmaterial",
        heat: 3963.0,
        elec: 0.0,
      },
      {
        lat: 59.642887,
        lng: 16.560177,
        adress: "Tunbytorpgatan 8",
        buildingowner:"AllOffice Västerås",
        heat: 8587.0,
        elec: 0.0,
      },
      {
        lat: 59.643028,
        lng: 16.557398,
        adress: "Tunbytorpsgatan 25",
        buildingowner:"Modexa AB",
        heat: 14724.0,
        elec: 178.0,
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
            zoom: 12,
            buildingowner: "standard",
            heatcompany: false,
            electricitycompany: false,
            admin: true
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
                            <h6><b>Adress:</b> {mark.adress}</h6>   
                            <h6><b>Building Owner:</b> {mark.buildingowner}</h6> 
                            <h6 ><b>Heat:</b><div className="heat_label">{this.state.heatcompany||this.state.admin ? mark.heat: "No access"}</div></h6>
                            <h6><b>Electricity:</b><div className="elec_label">{this.state.electricitycompany||this.state.admin ? mark.elec: "No access"}</div></h6>
                        </Popup>
                    </Marker>
                ))}
                </Map>
            </div>
        );
    }
}

export default MapView;