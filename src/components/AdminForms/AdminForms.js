import React, { Component } from 'react';
import './AdminForms.css';

class AdminForms extends Component {

    /*constructor(){

    }*/
    render() {
        return (
            <div className="page">
                <h2>test</h2>

                <form> </form>
                <div className="formCenter">
                <label className="Title" htmlFor="Bulding">Bulding</label>
                    
                    <div className="FormField">
                        <input type="text" id="name" className="FormField__Input" name="name" /*value={this.state.name} onChange={this.handleChange}*/ placeholder="Name"/>
                        <label className="FormField__Label" htmlFor="name">Name</label>
                    </div>

                    <div className="FormField">
                        <input type="text" id="address" className="FormField__Input" name="address" /*value={this.state.address} onChange={this.handleChange}*/ placeholder="Address"/>
                        <label className="FormField__Label" htmlFor="address">Address</label>
                    </div>
              </div>

              <label className="Title" htmlFor="Company">Company</label>
                    
                    <div className="FormField">
                        <input type="text" id="name" className="FormField__Input" name="name" /*value={this.state.name} onChange={this.handleChange}*/ placeholder="Name"/>
                        <label className="FormField__Label" htmlFor="name">Name</label>
                    </div>

                    <div className="FormField">
                        <input type="text" id="address" className="FormField__Input" name="address" /*value={this.state.address} onChange={this.handleChange}*/ placeholder="Address"/>
                        <label className="FormField__Label" htmlFor="address">Address</label>
                    </div>
              </div>

            
            
        );
    }


}

export default AdminForms;