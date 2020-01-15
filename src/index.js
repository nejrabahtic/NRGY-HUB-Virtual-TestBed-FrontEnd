import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppFirst from './AppFirst';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import MainView from './components/mainView/MainView';
import AdminAdd from './components/adminViewAdding/AdminAdd';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={AppFirst} />
        <Route path="/mainpage" component={MainView} />
        <Route path="/#/mainpage" component={MainView} />
        <Route path="/adminforms" component={AdminAdd} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
