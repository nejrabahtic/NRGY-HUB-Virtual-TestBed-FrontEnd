import './AppFirst.css';
import React,{Component} from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';


class AppWrong extends Component{
  render(){
    return(
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside">
            <div className="InfoText"> 
            <span>Welcome<span id="InfoTextUnder"><br/>to<br/>NRGY HUB virtual testbed</span></span>
            </div>
          </div>
          <div className="App__Form">
            {/* <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div> */}

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
      
          </div>

        </div>
      </Router>


      /* <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form">
          <div className="FormTitle">
            <a href="#" className="FormTitle__Link">Sign In</a>or <a href="#"
            className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
          </div>

          <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Username</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your username" name="name"/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Email Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter Password" name="password"/>
              </div>
            </form>
          </div>
        </div>
    </div> */
    )
  }
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Group 5 is really good.
        </p>
        <Button type="primary">Button</Button>
      </header>
    </div>
  );*/
}

export default AppWrong;
