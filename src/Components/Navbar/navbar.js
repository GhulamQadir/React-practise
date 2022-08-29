import React, { Component } from "react";
import Logo from "../Logo/logo";
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class Header extends Component {
    constructor() {
        super()
        this.state = {
            isMobile: false
        }
    }
    openNav = () => {
        this.setState({
            isMobile: true
        })
    }

    render() {
        const state = this.state
        return (
            <div>
                <div className={state.isMobile ? "mobileNav" : "navbar_div"}>
                    <nav className="myNav">
                        <Logo />
                        <div className="nav_links_div">
                            <a className="nav_links" href="#">Home</a>
                            <a className="nav_links" href="#">About</a>
                            <a className="nav_links" href="#">Products</a>
                            <a className="nav_links" href="#">Contact</a>
                        </div>
                        <div className="nav_icon_div">
                            <button onClick={this.openNav}><FontAwesomeIcon icon={faCoffee} /></button>
                        </div>

                    </nav>
                </div >
            </div >
        )
    }
}

export default Header;