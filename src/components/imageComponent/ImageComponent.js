import React, { Component } from 'react';
import logo from './coverImage.png';

class ImageComponent extends Component {
    render() {
        return (
            <img src={logo} alt="Logo" width="40%" height="100% - 1px" />
        );
    }
}

export default ImageComponent;