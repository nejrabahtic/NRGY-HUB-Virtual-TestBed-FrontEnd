import './AppFirst.css';
import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

class AppFirst extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            <div className="InfoText">
              <span>Welcome<span id="InfoTextUnder"><br />to<br />NRGY HUB virtual testbed</span></span>
            </div>
          </div>
          <div className="App__Form">

            <div className="formContainer">
              <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
            </div>


          </div>

        </div>
      </Router>
    )}
}

export default AppFirst;
