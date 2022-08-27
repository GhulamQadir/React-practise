import React, { Component } from "react";




class Counter extends Component {

    increment = () => {
        this.setState({
            count: this.props.state.count++
        })
    }


    decrement = () => {
        let { count } = this.props.state

        count > 0 ? this.setState({ count: this.props.state.count-- }) : count = count
    }


    render() {
        return (
            <div style={{ textAlign: "center", justifyContent: "center" }}>
                <p>Count: {this.props.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;