import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {

  constructor(){

    super();

    this.state = {
      name: '',
      company: '',  /*måste spara värdet på comapny på nått sätt, detta funkar ej */
      email:'',
      address:'',
      password: '',
      userType: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e,index){
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked :target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
    /* this.state.adresses[index] = e.target.value;
    this.setState({adresses: this.state.adresses}); */
  }
/*   addAdress(){
    this.setState({adresses: [...this.state.adresses,""]}
    )
  } */
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
                <input type="text" id="name" className="FormField__Input" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Username"/>
                <label className="FormField__Label" htmlFor="name">Username</label>
              </div>
              <div className="FormField">
                <input type="email" id="email" className="FormField__Input" name="email" value={this.state.email} onChange={this.handleChange} placeholder="E-mail"/>
                <label className="FormField__Label" htmlFor="email">E-mail</label>
              </div>
              
              <div className="FormField"/*Ska vara multiple adress */>
                {/* <label className="FormField__Adress" htmlFor="adress">Adress</label > 
                {
                  this.state.adresses.map((adress,index)=>{
                    return(
                      <div key={index}>
                        <input className="adress_input"onChange={(e)=>this.handleChange(e, index)} value={adress}/>
                      </div>
                    )
                  })
            
              <button className="Formfield_AdressButton"onClick={(e)=>this.addAdress(e)}>Add Adress</button>*/}
                <input type="text" id="address" className="FormField__Input" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Address"/>
                <label className="FormField__Label" htmlFor="address">Address</label>
              </div>
              <div className="FormField">
                <select className="FormField__Select" name="company" value={this.state.company} onChange={this.handleChange}>
                  <option value="choose_company">Choose your company..</option>
                  <option value="noCompany">no company</option>
                  <option value="company1">company1</option>
                  <option value="company2">company2</option>
                </select>   
              </div>

              <div className="FormField">
                <select className="FormField__Select" name="userType" value={this.state.userType} onChange={this.handleChange}>
                  <option value="select_user_type">Select your user type..</option>
                  <option value="single_user">Single User</option>
                  <option value="heating_company">Heating Company</option>
                  <option value="electricity_company">Electricity Company</option>
                  <option value="regular_user">Regular User</option>
                </select>   
              </div>

              <div className="FormField">
                <input type="password" id="password" className="FormField__Input" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                <label className="FormField__Label" htmlFor="password">Password</label>
              </div>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
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