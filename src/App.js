import React, { Component } from 'react';
import Header from './Components/Navbar/navbar';
import MainComponent from './Components/MainComponent/main-component';
import { Comp1, Comp2 } from './Components/multiple_components/multiple-components'
import Form from './Components/form/form';
import AppRouter from './Config/Router';

// class App extends Component {
//   render() {
//     return (
//       <div>

//         {/* Rendering Header from external file */}

//         <Header page="App Header" />

//         {/* Rendering Main-Component from external file */}
//         <MainComponent />
//         <Form />

//         <br />
//         <br />

//         {/* Made multiple components in one file */}
//         <Comp1 number="1" />
//         <Comp2 number="2" />
//       </div>
//     )
//   }
// }

// export default App;






///////////               ROUTING PRACTISE                /////////
function App() {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  )
}

export default App;