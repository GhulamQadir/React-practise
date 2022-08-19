import React, { Component } from 'react';


class App extends Component {
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
      <div>
        {/* Basic Code */}
        <h1>Hi, {`${myFullName.firstName}${myFullName.lastName}`}</h1>
        <h2>{myArr}</h2>




        {/* Rendering Todos Array Data using Map*/}
        <div>
          {todos.map((todo, index) => {
            return <p key={index}>{`${index + 1}: ${todo.title}`}</p>

          })}
        </div>
        <br />
      </div>
    )
  }
}

export default App;