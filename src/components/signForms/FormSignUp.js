import React, { Component } from 'react';
import { Form, Dropdown, Button, FormGroup } from 'react-bootstrap';

class FormSignUp extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="password" placeholder="Enter your address" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCompany">
                        <Form.Label>Choose company</Form.Label>
                        <Form.Control as="select">
                            <option>Company 1</option>
                            <option>Company 2</option>
                            <option>Company 3</option>
                            <option>Company 4</option>
                            <option>Company 5</option>
                        </Form.Control>
                    </Form.Group>
                    <FormGroup controlId="formRadioUserType">
                        <Form.Label>Select user type</Form.Label>
                        <br></br>
                        <Form.Check 
                            inline 
                            label="Single User" 
                            type="radio" 
                            id="radioSingleUser" />
                        <Form.Check 
                            inline 
                            label="Heating Company" 
                            type="radio" 
                            id="radioHeatingCompany" />
                        <Form.Check 
                            inline 
                            label="Electricity Company" 
                            type="radio" 
                            id="radioElectricityCompany" />
                        <Form.Check
                            inline
                            label="Regular User"
                            type="radio"
                            id="radioRegularUser"
                        />
                    </FormGroup>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Agree with Terms and Conditions" ahref="/signin" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
        );
    }
}

export default FormSignUp;