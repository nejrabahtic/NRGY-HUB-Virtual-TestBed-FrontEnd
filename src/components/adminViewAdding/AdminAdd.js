import React, { Component } from 'react';
import SideBar from '../sidebar/Sidebar';
import AdminForms from '../AdminForms/AdminForms';

class AdminAdd extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <AdminForms />
            </div>
        );
    }
}

export default AdminAdd;