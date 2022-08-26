import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import MainComponent from "../../Components/MainComponent/main-component";



class Home extends Component {
    goToAbout = () => {
        console.log(this.props.history)
        this.props.history.replace('/about')   // replacing path here without coming back
    }
    render() {
        return (
            <div style={{ margin: 10 }}>
                <h1>Home PAGE</h1>
                <br />
                <br />
                <Link to="/about">About</Link>
                <br />
                <br />



                {/* Routing through JavaScript */}
                <button onClick={this.goToAbout}>Go to About</button>

                <br />
                <br />



                {/* Main Component */}
                <MainComponent />

            </div>
        )
    }
}

export default withRouter(Home);