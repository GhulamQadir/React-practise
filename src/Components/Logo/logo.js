import React, { Component } from 'react';
import LogoImg from '../../Images/sample-logo.png'
import './logo.css'


class Logo extends Component {
    render() {
        return (
            <div className='logo_div'>
                <img src={LogoImg} className="logo_img" />
            </div>
        )
    }
}

export default Logo;

