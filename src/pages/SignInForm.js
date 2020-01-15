import React, { Component } from 'react';
import { Redirect, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import MainView from '../components/mainView/MainView';

class SignInForm extends Component {
  state = {
    email: '',
    password: '',
    isLoading: true,
    users: [],
    redirectToReferrer: false
  }

  async componentDidMount() {
    const response = await fetch('/user/all');
    const body = await response.json();
    this.setState({ users: body, isLoading: false });
  }

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let email = target.name;

    this.setState({ [email]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const items = [];
    if (this.state.users != null || this.state.users !== undefined) {
      this.state.users.map(user => (
        items.push(user)
      ))
    }

    items.map(item => {
      if (item.name === this.state.email && item.password === this.state.password){
        this.state.redirectToReferrer = true;
      }
    })

    this.props.history.replace('/mainpage');
    return <Route path="/#/mainpage" component={MainView} />
  }

  render() {
    const { users, isLoading } = this.state;

    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer === true) {
        return <Redirect to="/#/mainpage" />
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <input type="email" id="email" className="FormField__Input" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
            <label className="FormField__Label" htmlFor="email">Email</label>
          </div>

          <div className="FormField">
            <input type="password" id="password" className="FormField__Input" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
            <label className="FormField__Label" htmlFor="password">Password</label>
          </div>
          <label id="SignIn__Error" hidden={true} >Wrong username or password</label>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button> <Link to="/mainpage" className="FormField__Link">Create an account</Link>
          </div>
        </form>
      </div>
    );
  }

}
export default SignInForm;
