import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    render() {
        return (
            <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <input type="text" id="name" className="FormField__Input" name="name" /* value={this.state.email} onChange={this.handleChange} */ />
                  <label className="FormField__Label" htmlFor="email">Username</label>
                </div>

                <div className="FormField">
                  <input type="password" id="password" className="FormField__Input" name="password" /* value={this.state.password} onChange={this.handleChange} */ />
                  <label className="FormField__Label" htmlFor="password">Password</label>
                </div>

                <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                </div>
              </form>
            </div>
        );
    }

}
export default SignInForm;
