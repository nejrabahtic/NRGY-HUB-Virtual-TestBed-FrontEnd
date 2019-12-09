import '../pages/homeMapCmp';
import React,{Component} from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import homeMapCmp from './pages/homeMapCmp';
import { V4MAPPED } from 'dns';

class homeMapCmp extends Component{
  render(){
    return(
      <Router basename="/homeMap/">
        <head>
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
              integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
              crossorigin=""/>
        </head>
        <div className="homeMap">
              <Route path="/homeMap" component={homeMapCmp}>
              </Route>
        </div>
        <div id="homeMap"></div>
      </Router>
    )
  }
}