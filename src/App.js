import React, { Component } from 'react';
import './App.css';
import ImageComponent from './components/imageComponent/ImageComponent';
import SignForms from './components/signForms/SignForms';


class App extends Component {
    render() {
        return (
            <div>
                <ImageComponent />
                <SignForms />
            </div>
        );
    }
}

export default App;