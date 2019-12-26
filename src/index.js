import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppWrong from './AppFirst';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import SignInForm from './components/signForms/FormSignIn';
import SignUpForm from './components/signForms/FormSignUp';
import MapView from './components/mapComponent/MapView';
import MainView from './components/mainView/MainView';


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
