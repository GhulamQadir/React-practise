import React, { Component } from "react";




class Counter extends Component {
    render() {
        return (
            <div style={{ textAlign: "center", justifyContent: "center" }}>
                <h1>Counter App</h1>
                <br />
                <p>Count: {this.props.state.count}</p>
            </div>
        )
    }
}

export default Counter;