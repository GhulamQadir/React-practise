import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../Containers/Home/Home'
import About from '../Containers/About/About'



class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
            </Router >
        )
    }
}

export default AppRouter;