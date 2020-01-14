import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUpForm extends Component {
  state = {
    isLoading: true,
    name: '',
    email: '',
    address: '',
    password: '',
    admin: false,
    elecCompany: false,
    heatCompany: false,
    lat: 59.6082,
    lon: 16.5506
  };

  async componentDidMount() {
    const response = await fetch('/company/all');
    const body = await response.json();
    this.setState({ companies: body, isLoading: false });
  }

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    let type = target.value;
    let password = target.value;

    if (type === "heating_company"){
      this.state.heatCompany = 1;
      this.state.elecCompany = 0;
    }
    
    if (type === "electricity_company"){
      this.state.heatCompany = 0;
      this.state.elecCompany = 1;
    }

    this.setState({ [name]: value });
  }

  handleSubmit(event){
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      password: this.state.password,
      admin: false,
      elecCompany: this.state.elecCompany,
      heatCompany: this.state.heatCompany,
      lat: this.state.lat,
      lon: this.state.lon
    };

    console.log("USER", user)

    fetch('http://localhost:8000/user/add',{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }

  render() {
    const { companies, isLoading } = this.state;

    if (isLoading) {
      return <p><center>Loading...</center></p>;
    }

    const items = [];
    if (companies != null || companies !== undefined) {
      companies.map(company => (
        items.push(company)
      ))
    }

    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <input type="text" id="name" className="FormField__Input" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
            <label className="FormField__Label" htmlFor="name">Name</label>
          </div>
          <div className="FormField">
            <input type="email" id="email" className="FormField__Input" name="email" value={this.state.email} onChange={this.handleChange} placeholder="E-mail" />
            <label className="FormField__Label" htmlFor="email">E-mail</label>
          </div>

          <div className="FormField">
            <input type="password" id="password" className="FormField__Input" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
            <label className="FormField__Label" htmlFor="password">Password</label>
          </div>

          <div className="FormField">
            <input type="text" id="address" className="FormField__Input" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Address" />
            <label className="FormField__Label" htmlFor="address">Address</label>
          </div>
          <div className="FormField">
            <select className="FormField__Select" name="company" onChange={this.handleChange}>
              <option value="choose_company">Choose your company..</option>
              {
                items.map(company => (
                  <option value={company.name} key={company.id}>{company.name}</option>
                ))
              }
            </select>
          </div>

          <div className="FormField">
            <select className="FormField__Select" name="userType" value={this.state.userType} onChange={this.handleChange}>
              <option value="select_user_type">Select your user type..</option>
              <option value="heating_company">Heating Company</option>
              <option value="electricity_company">Electricity Company</option>
            </select>
          </div>
          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
            </label>
          </div>
          <label id="SignUp__Error" hidden={true}>All fields must be filled in</label>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>
            <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
          </div>
        </form>
      </div>
    );
  }

}
export default SignUpForm;