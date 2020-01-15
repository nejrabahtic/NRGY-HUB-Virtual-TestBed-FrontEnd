import React, { Component } from 'react';
import './AdminForms.css';

class AdminForms extends Component {
    state = {
        buildingName: '',
        buildingAddress: '',
        companyName: '',
        companyAddress: ''

    };
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const company = {
            name: this.state.companyName,
            address: this.state.companyAddress
        };

        const building = {
            name: this.state.buildingName,
            address: this.state.buildingAddress
        }

        if (company !== null){
            fetch('/company/add', {
                method: "POST",
                body: JSON.stringify(company),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            }).then(response => {
                response.json().then(data => {
                    console.log("Successful" + data);
                })
            })
    
        }
        
        if(building !== null){
            fetch('/building/add', {
                method: "POST",
                body: JSON.stringify(building),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            }).then(response => {
                response.json().then(data => {
                    console.log("Successful" + data);
                })
            })
        }

        this.setState({
            buildingName: '',
            buildingAddress: '',
            companyName: '',
            companyAddress: ''
        })
    }

    render() {
        return (
            <div className="page">
                <div className="Container">

                    <h1>Admin Panel</h1>

                    <form onSubmit={this.handleSubmit} className="FormFields">
                        <div className="formCenter">
                            <h2 className="Title">Building</h2>

                            <div className="FormField">
                                <input type="text" id="name" className="FormField__Input" name="buildingName" value={this.state.buildingName} onChange={this.handleChange} placeholder="Name" />
                                <label className="FormField__Label" htmlFor="name">Name</label>
                            </div>

                            <div className="FormField">
                                <input type="text" id="address" className="FormField__Input" name="buildingAddress" value={this.state.buildingAddress} onChange={this.handleChange} placeholder="Address" />
                                <label className="FormField__Label" htmlFor="address">Address</label>
                            </div>

                            <div className="FormField">
                                <button className="FormField__Button mr-20" id="buildingSave">Save</button>
                            </div>
                        </div>

                        <div className="formCenter">

                            <h2 className="Title">Company</h2>

                            <div className="FormField">
                                <input type="text" id="name" className="FormField__Input" name="companyName" value={this.state.companyName} onChange={this.handleChange} placeholder="Name" />
                                <label className="FormField__Label" htmlFor="name">Name</label>
                            </div>

                            <div className="FormField">
                                <input type="text" id="address" className="FormField__Input" name="companyAddress" value={this.state.companyAddress} onChange={this.handleChange} placeholder="Address" />
                                <label className="FormField__Label" htmlFor="address">Address</label>
                            </div>

                            <div className="FormField">
                                <button className="FormField__Button mr-20" id="companySave">Save</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>



        );
    }


}

export default AdminForms;