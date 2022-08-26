import React, { Component } from "react";
import { Link } from "react-router-dom";



class Home extends Component {
    render() {

        return (
            <div>
                <h1>Home PAGE</h1>
                <br />
                <br />
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default Home;