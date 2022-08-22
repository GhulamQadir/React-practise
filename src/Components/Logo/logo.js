import React, { Component } from 'react';
import LogoImg from '../../Images/sample-logo.png'


class Logo extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'inline' }}>
                    <img src={LogoImg} style={{ display: 'inline', width: 100, height: 40 }} />
                </div>
            </div>
        )
    }
}

export default Logo;

