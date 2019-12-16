import React, { Component } from 'react';
import MapView from '../mapComponent/mapView';
import SideBar from '../sidebar/sidebar';
import NavBar from '../navbar/navbar';

class MainView extends Component {
    render() {
        return (
            <div>
                <SideBar/>
                <NavBar/>
                <MapView />
                SOMETHING CRAZY
            </div>
        );
    }
}

export default MainView;