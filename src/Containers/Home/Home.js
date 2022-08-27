import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import MainComponent from "../../Components/MainComponent/main-component";
import Counter from "./counter/counter";
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



    static getDerivedStateFromProps(props, state) {
        // console.log("getDerivedStateFromProps")      // constructor k baad chalega


        console.log("derivedState=>> ", state)
        console.log(props)
        return null;

        // return {
        //     count: 4
        // }
    }

    componentDidMount() {
        console.log("componentDidMount")                 // sabse end ma chalega


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


    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    decrement = () => {
        let { count } = this.state

        count > 0 ? this.setState({ count: count - 1 }) : count = count
    }

    reset = () => {
        let { count } = this.state
        count = 0
        this.setState({ count: count })
    }



    shouldComponentUpdate() {         // this lifecycle(shouldComponentUpdate) stops component from rendering although the state would be update

        if (this.state.count < 10) {
            return true
        }
        else {
            return false
        }
    }



    getSnapshotBeforeUpdate(preProps, preState) {    // state update hony s pehle wali value get save karega
        console.log("getSnapshotBeforeUpdate=>>", preState)
    }

    componentDidUpdate() { }




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
                    <br /> */}


                {/* Counter App */}
                <div style={{ textAlign: "center", justifyContent: "center" }}>
                    {/* <p>Count: {this.state.count}</p> */}
                </div>

                <Counter state={this.state} />

                <div className="btns">
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </div>

                {/* Routing through JavaScript */}
                <button onClick={this.goToAbout}>Go to About</button>
                <br />
                <br />
                <br />

                {/* Main Component */}
                {/* <MainComponent /> */}



                {/* Api Calling using LifeCycle(componentDidMount) */}
                {/* <h1 style={{ textAlign: "center" }}>API Calling</h1>
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
                </div> */}

            </div>
        )
    }
}

export default withRouter(Home);