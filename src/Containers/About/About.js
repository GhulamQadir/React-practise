import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Form from "../../Components/form/form";



class About extends Component {
    goToHome = () => {
        this.props.history.push('/')
    }
    render() {
        console.log(this.props.location.state.details)

        return (
            <div style={{ margin: 10 }}>
                <h1>About PAGE</h1>
                <br />
                <br />
                <Link to="/">Home</Link>
                <br />
                <br />
                <p>{this.props.location.state.details}</p>



                {/* Routing through JavaScript */}
                <button onClick={this.goToHome}>Go to Home</button>




                {/* Form Component */}
                <Form />
            </div>
        )
    }
}

export default withRouter(About);