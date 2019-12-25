import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppWrong from './AppWrong';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import MapView from './components/mapComponent/mapView';
import MainView from './components/mainView/mainView';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/forms" component={AppWrong} />
        <Route path="/signin" component={SignInForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/map" component={MapView} />
        <Route path="/mainpage" component={MainView} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
