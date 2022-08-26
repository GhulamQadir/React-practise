import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Containers/Home/Home'
import About from '../Containers/About/About'



class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/about' element={<About />} />
                </Routes>
            </Router>
        )
    }
}

export default AppRouter;