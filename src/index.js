import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppFirst from './AppFirst';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import MapView from './components/mapComponent/MapView';
import MainView from './components/mainView/MainView';
import AdminForms from './components/AdminForms/AdminForms';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={AppFirst} />
        <Route path="/signin" component={SignInForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/map" component={MapView} />
        <Route path="/mainpage" component={MainView} />
        <Route path="/adminforms" component={AdminForms} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
