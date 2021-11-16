import React from 'react';
import logo from './logo.svg';
import './App.css';

import ContactoHandler from './components/ContactoHandler'
import Clock from './components/Clock'

/**
 Para este primer reto de programación en React vamos a poner en practica lo aprendido hasta ahora 
 para crear dos componentes. Cada uno de estos componentes tendrá sus propias características.

Componente A:

Este componente va a tener disponer un Contacto(crea una clase para ello), 
que va a contar con las siguientes características:

 - Nombre: que será un String.
 - Apellido: también un String.
 - Email: de nuevo un String.
 - Conectado: será un booleano que nos indicará si la persona está conectada o no.


Componente B:

Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar 
su estado de conectado a desconectado y viceversa.

Si el contacto está conectado, se debe mostrar: Contacto En Línea
Si el contacto no está conectado, se debe mostrar: Contacto No Disponible


Renderizado de componentes en la solución:

 - El Componente A debe ser renderizado dentro del componenet App.js del proyecto.
 - El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente

Recordatorio: Haz uso de Proptypes adecuadamente
 */

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { /* From Ejercicio Sesiones 1, 2 y 3: <ContactoHandler /> */ }
          { /* From Ejercicio Sesiones 4, 5, 6:  */} <Clock />
        </header>
      </div>
    );
  }
}


export default App;
