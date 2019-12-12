import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {

  constructor(){

    super();

    this.state = {
      name: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    console.log('the form');
    console.log(this.state);
  }

    render() {
        return (
            <div className="FormCenter">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <input type="text" id="name" className="FormField__Input" name="name" value={this.state.name} onChange={this.handleChange} />
                  <label className="FormField__Label" htmlFor="email">Username</label>
                </div>

                <div className="FormField">
                  <input type="password" id="password" className="FormField__Input" name="password" value={this.state.password} onChange={this.handleChange} />
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
