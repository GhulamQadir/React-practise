import React, { Component } from 'react';
import Header from './Components/Navbar/navbar';
import MainComponent from './Components/MainComponent/main-component';

class App extends Component {
  render() {
    return (
      <div>

        {/* Rendering Header from external file */}
        <Header />


        {/* Rendering Main-Component from external file */}
        <MainComponent />

      </div>
    )
  }
}

export default App;