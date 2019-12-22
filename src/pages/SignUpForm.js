import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {

  constructor(){

    super();

    this.state = {
      name: '',
     // company: '',  /*måste spara värdet på comapny på nått sätt, detta funkar ej */
      email:'',
      adress:'',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked :target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    console.log('the form has save');
    console.log(this.state);
  }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <input type="text" id="name" className="FormField__Input" name="name" value={this.state.name} onChange={this.handleChange} />
                <label className="FormField__Label" htmlFor="name">Username</label>
              </div>
              <div className="FormField">
                <input type="email" id="email" className="FormField__Input" name="email" value={this.state.email} onChange={this.handleChange} />
                <label className="FormField__Label" htmlFor="email">E-mail</label>
              </div>
              <div className="FormField">
                <select value={this.state.company} onChange={this.handleChange}>
                  <option value="choose_company">choose your company</option>
                  <option value="noCompany">no company</option>
                  <option value="company1">company1</option>
                  <option value="company2">company2</option>
                </select>   
              </div>
              <div className="FormField"/*Ska vara multiple adress */>
                <input type="text" id="company" className="FormField__Input" name="adress" value={this.state.adress} onChange={this.handleChange} /*ska vara lista*//>
                <label className="FormField__Label" htmlFor="adress">Adress</label >   
              </div>
              <div className="FormField">
                <input type="password" id="password" className="FormField__Input" name="password" value={this.state.password} onChange={this.handleChange} />
                <label className="FormField__Label" htmlFor="password">Password</label>
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