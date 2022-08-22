import React, { Component } from "react";
import './navbar.css'


class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar_div">
                    <nav className="myNav">
                        <h1 className="logo">Header</h1>
                        <div className="nav_links_div">
                            <a className="nav_links" href="#">Home</a>
                            <a className="nav_links" href="#">About</a>
                            <a className="nav_links" href="#">Products</a>
                            <a className="nav_links" href="#">Contact</a>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;