import React, { Component } from 'react';
import logo from './coverImage.png';

class ImageComponent extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" />;
            </div>
        );
    }
}

export default ImageComponent;