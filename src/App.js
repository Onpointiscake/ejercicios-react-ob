import React from 'react';
import logo from './logo.svg';
import './App.css';

//import ContactoHandler from './components/sesion123/ContactoHandler'
//import Clock from './components/sesion456/Clock'
//import ContactList from './components/sesion789/ContactList'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { /* From Ejercicio Sesiones 1, 2 y 3: <ContactoHandler /> */ }
          { /* From Ejercicio Sesiones 4, 5, 6:  <Clock /> */}
          { /* From Ejercicio Sesiones 7, 8, 9: <ContactList /> */} 
        </header>
      </div>
    );
  }
}


export default App;
