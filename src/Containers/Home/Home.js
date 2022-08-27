import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import MainComponent from "../../Components/MainComponent/main-component";
import './Home.css'



class Home extends Component {

    // LifeCycle methods
    constructor() {                 // app start hoty he chalega
        super()
        this.state = {
            count: 0,
            users: []
        }
        console.log("constructor")
    }



    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps")       // constructor k baad chalega
        return {
            count: 4
        }
    }

    componentDidMount() {
        console.log("componentDidMount")             // sabse end ma chalega


        // API Calling
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(usersData => {
                this.setState({
                    users: usersData
                })
                console.log(usersData)
            })
            .catch(error => console.log(error))

    }












    goToAbout = () => {
        console.log(this.props.history)
        this.props.history.replace('/about')   // replacing path here without coming back
    }
    render() {
        console.log("Render....")
        return (
            <div style={{ margin: 10 }}>
                <h1>Home PAGE</h1>
                <br />
                <br />
                {/* <Link to="/about">About</Link>
                    <br />
                    <br />

                    <p>Count: {this.state.count}</p> */}

                {/* Routing through JavaScript */}
                <button onClick={this.goToAbout}>Go to About</button>
                <br />
                <br />
                <br />

                {/* Main Component */}
                {/* <MainComponent /> */}



                {/* Api Calling using LifeCycle(componentDidMount) */}
                <h1 style={{ textAlign: "center" }}>API Calling</h1>
                <div>
                    {this.state.users.map((user, index) => {
                        return (
                            <div className="userDiv" key={index}>
                                <p className="name">{user.name}</p>
                                <p className="address"><span className="headings">Address:</span> {user.address.street}</p>
                                <p className="phoneNo"><span className="headings">Phone No:</span> {user.phone}</p>

                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default withRouter(Home);