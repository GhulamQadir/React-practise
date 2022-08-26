import React, { Component } from "react";
import { Link } from "react-router-dom";



class Home extends Component {
    goToAbout = () => {
        this.props.history.push('/about')
    }
    render() {
        return (
            <div>
                <h1>Home PAGE</h1>
                <br />
                <br />
                <button onClick={this.goToAbout}>Go to Home</button>
                {/* <Link to="/about">About</Link> */}
            </div>
        )
    }
}

export default Home;