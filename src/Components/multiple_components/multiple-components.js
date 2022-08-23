import React, { Component } from "react";




class Comp1 extends Component {
    render() {
        return (
            <div>
                <h3>This is Component 1 from multiple components file</h3>
            </div>
        )
    }
}



class Comp2 extends Component {
    render() {
        return (
            <div>
                <h3 style={{ color: "red" }}>This is Component 2 from multiple components file</h3>
            </div>
        )
    }
}



export { Comp1, Comp2 };