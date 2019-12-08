import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Username</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your username" name="name"/*  value={this.state.name} onChange={this.handleChange} */ />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" /* value={this.state.password} onChange={this.handleChange} */ />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Repeat your password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Repeat your password" name="password" /* value={this.state.password} onChange={this.handleChange} */ />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-mail</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" /* value={this.state.email} onChange={this.handleChange} */ />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="company">Company Name</label>
                <input type="text" id="company" className="FormField__Input" placeholder="Enter your company name" name="company" /* value={this.state.email} onChange={this.handleChange} */ />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }

}
export default SignUpForm;