import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AdminForms.css';

class AdminForms extends Component {

    /*constructor(){

    }*/
    render() {
        return (
            <div className="page">
                <div className="Container">

                    <h1>Admin Panel</h1>

                   <form> </form>
                    <div className="formCenter">
                        <h2 className="Title">Building</h2> 
                        
                        <div className="FormField">
                            <input type="text" id="name" className="FormField__Input" name="name" /*value={this.state.name} onChange={this.handleChange}*/ placeholder="Name"/>
                            <label className="FormField__Label" htmlFor="name">Name</label>
                        </div>

                        <div className="FormField">
                            <input type="text" id="address" className="FormField__Input" name="address" /*value={this.state.address} onChange={this.handleChange}*/ placeholder="Address"/>
                            <label className="FormField__Label" htmlFor="address">Address</label>
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Save</button>
                        </div>
                    </div>

                    <div className="formCenter">
                        
                        <h2 className="Title">Company</h2> 
                        
                        <div className="FormField">
                            <input type="text" id="name" className="FormField__Input" name="name" /*value={this.state.name} onChange={this.handleChange}*/ placeholder="Name"/>
                            <label className="FormField__Label" htmlFor="name">Name</label>
                        </div>

                        <div className="FormField">
                            <input type="text" id="address" className="FormField__Input" name="address" /*value={this.state.address} onChange={this.handleChange}*/ placeholder="Address"/>
                            <label className="FormField__Label" htmlFor="address">Address</label>
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Save</button>
                        </div>
                    </div> 

                </div>   
            </div>

            
            
        );
    }


}

export default AdminForms;