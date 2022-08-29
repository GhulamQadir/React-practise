import React, { Component } from "react";
import Logo from "../Logo/logo";
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faNavicon } from '@fortawesome/free-solid-svg-icons'


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

    closeNav = () => {

        this.setState({
            isMobile: false
        })
    }

    render() {
        const isMobile = this.state.isMobile
        return (
            <div>
                <div className={isMobile ? "mobileNav" : "navbar_div"}>
                    <nav className="myNav">
                        <Logo />
                        <div className="nav_links_div">
                            <a className="nav_links" href="#">Home</a>
                            <a className="nav_links" href="#">About</a>
                            <a className="nav_links" href="#">Products</a>
                            <a className="nav_links" href="#">Contact</a>
                        </div>
                        <div className="nav_icon_div">
                            {isMobile ? <button onClick={this.closeNav}><FontAwesomeIcon icon={faCross} /></button>
                                : <button onClick={this.openNav}><FontAwesomeIcon icon={faNavicon} /></button>
                            }
                        </div>

                    </nav>
                </div >
            </div >
        )
    }
}

export default Header;