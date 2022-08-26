import React, { Component } from "react";
import { Link } from "react-router-dom";



class About extends React.Component {
    goToHome = () => {
        this.props.history.push('/')
    }
    render() {

        return (
            <div>
                <h1>About PAGE</h1>
                <br />
                <br />
                <Link to="/">Home</Link>
                <br />
                <br />

                {/* Routing through link */}
                <button onClick={this.goToHome}>Go to Home</button>

            </div>
        )
    }
}

export default About;