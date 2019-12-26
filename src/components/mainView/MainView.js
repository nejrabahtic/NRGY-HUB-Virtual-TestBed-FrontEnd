import React, { Component } from 'react';
import MapView from '../mapComponent/MapView';
import SideBar from '../sidebar/Sidebar';

class MainView extends Component {
    render() {
        return (
            <div>
                <SideBar/>
                <MapView />
            </div>
        );
    }
}

export default MainView;