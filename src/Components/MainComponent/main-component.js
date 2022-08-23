import React, { Component } from "react";
import './main-component.css'


class MainComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: "Ghulam Qadir",
            email: "ghulamqadirsakaria25@gmail.com"
        }
        this.state = {
            name: "Ghulam Qadir",
            email: "ghulamqadirsakaria25@gmail.com"
        }
        // this.setName = this.setName.bind(this)
    }


    // we need to bind normal function if we want to get state's value'(old react js)
    // setName() {
    //     console.log(`by using normal function: ${this.state.name}`)
    // }



    getName = () => {
        console.log(this.state.name)
    }


    setName = () => {
        this.setState({
            name: "Developer Ghulam Qadir"
        })
    }




    // Setting and getting input field values
    setUserName = (inputVal) => {
        this.setState({
            name: inputVal.target.value
        })
    }


    setData = (e) => {


        e.preventDefault();
    }

    handleChange(e) {

        console.log(e.target.value)
    }


    render() {
        let myFullName = {
            firstName: "Ghulam Qadir ",
            lastName: "Sakaria"
        }

        let myArr = [1, 2, 3, 4, 5]

        let todos = [
            { title: "React" },
            { title: "JavaScript" },
            { title: "CSS" },
            { title: "HTML" }
        ]
        return (
            <div className="main-component">
                <h1>Hi, {`${myFullName.firstName}${myFullName.lastName}`}</h1>

                <br />
                {/* Rendering numbers array */}
                <h2>{myArr}</h2>

                <br />
                <br />


                {/* Rendering Todos Array Data using Map*/}
                <div>
                    {todos.map((todo, index) => {
                        return <p key={index}>{`${index + 1}: ${todo.title}`}</p>

                    })}
                </div>
                <br />
                <br />
                <br />

                {/* Using State */}
                {/* <h1>My name is {this.state.name}</h1>
                <p>email: {this.state.email}</p>
                <button onClick={this.getName}>Get Name</button>
                <button onClick={this.setName}>Set Name</button> */}



                {/* STATE PRACTISE */}
                {/* setting value of input field */}
                {/* <h2>Your name is: {this.state.name}</h2>
                <input onChange={(e) => this.setUserName(e)} type="text" placeholder="Enter your name" /> */}





                {/* Form Using State */}
                <h2>Form:</h2>
                <form method="post" onSubmit={this.setData}>
                    <input onSubmit={(e) => this.handleChange(e)} name="name" type="text" placeholder="Enter your name" />
                    <br />
                    <input onSubmit={(e) => this.handleChange(e)} name="email" type="text" placeholder="Enter your email" />
                    <br />
                    <button onClick={this.setData}>Set Data</button>

                </form>
            </div>
        )
    }
}
export default MainComponent;