import React, { Component } from "react";
import './form.css'



class Form extends Component {

    constructor() {
        super()
        this.state = {
            inputValues: {
                name: "",
                email: ""
            },
            headingValues: {
                name: "",
                email: ""
            }
        }
    }


    updateInputValue = (e) => {
        this.setState({
            inputValues: {
                ...this.state.inputValues,
                [e.target.name]: e.target.value
            }
        })
    }

    setData = (e) => {
        e.preventDefault()
        this.setState({
            headingValues: {
                name: this.state.inputValues.name,
                email: this.state.inputValues.email
            }
        })
    }
    render() {
        return (
            <div className="form-div">
                <h1>Form Component</h1>
                <br />
                <p>My name is {this.state.headingValues.name}</p>
                <p>My email is {this.state.headingValues.email}</p>
                <br />
                <form onSubmit={(e) => this.setData(e)}>
                    <input name="name" onChange={(e) => this.updateInputValue(e)} type="text" placeholder="Enter your name" />
                    <br />
                    <input name="email" onChange={(e) => this.updateInputValue(e)} type="text" placeholder="Enter your email" />
                    <br />
                    <button onClick={(e) => this.setData(e)}>Set Data</button>
                </form>
            </div>
        )
    }
}

export default Form;