import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './navbar.css';

class NavBar extends Component {

    render() {

        return (
            <div /* className="topBar" */>
                <ul>
                    <li><a href="/sign-in"></a></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;