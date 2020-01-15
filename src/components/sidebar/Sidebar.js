import React, { Component } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sidebar.css';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import MainView from '../mainView/MainView';
import AdminAdd from '../adminViewAdding/AdminAdd';
import AppFirst from '../../AppFirst';

class SideBar extends Component {
    render() {
        return (
            <div>
                <Router>
                    <SideNav
                        onSelect={(selected) => {
                            // Add your code here
                        }}
                    >
                        <SideNav.Nav defaultSelected="mainView" id="nav">
                            <h5><center>Menu</center></h5>
                            <NavItem as={Link} to="/adminforms">
                                <NavIcon>
                                    <i className="fa fa-user" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    User information
                            </NavText>
                            </NavItem>
                            <NavItem ahref="/mainpage">
                                <NavIcon>
                                    <i className="fa fa-fire" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Heating information
                            </NavText>
                            </NavItem>
                            <NavItem>
                                <NavIcon>
                                    <i className="fa fa-lightbulb-o" style={{ fontSize: '1.75em' }}></i>
                                </NavIcon>
                                <NavText>
                                    Electricity information
                            </NavText>
                            </NavItem>
                            <NavItem>
                                <NavIcon>
                                    <i className="fa fa-cog" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Logout
                            </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </Router>

            </div>
        );
    }
}

export default SideBar