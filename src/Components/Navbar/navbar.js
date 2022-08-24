import React, { Component } from "react";
import Logo from "../Logo/logo";
import './navbar.css'


class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar_div">
                    <nav className="myNav">
                        <Logo /><span style={{ color: "white" }}>{this.props.page}</span>
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