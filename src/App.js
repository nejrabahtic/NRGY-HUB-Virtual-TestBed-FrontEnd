//import React from 'react';
import './App.css';
import Button from 'antd/es/button';
/////////
import React,{Component} from 'react';

class App extends Component{
  render(){
    return(
      <div className="App">
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
    </div>
    )
  }
}

export default App;
