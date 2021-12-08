import React, { useEffect, useState } from 'react'

export default function Clock () {

    const [clockState, setClockState] = useState([
        {
            nombre: "Martin",
            edad: 0,
            fecha: new Date(), 
            apellidos: "San Jose"
        }
    ])

    
   useEffect(() => {
    const timerID = setInterval(() => tick(),1000)
    // returned function will be called on component unmount 
    return () => {
        clearInterval(timerID)
    }
   }, []);
   
   
   function tick () {
    setClockState((prevState) => ({
        ...prevState,
        fecha: new Date(), 
        edad: prevState.edad +1
      }));  
   }

   return (
        <div>
            <h2>
            Hora Actual:
            { clockState.fecha.toLocaleTimeString() }
            </h2>
            <h3>{clockState.nombre} {clockState.apellidos}</h3>
            <h1>Edad: {clockState.edad}</h1>
        </div>
   )
}

    /*
   const fecha = new Date()
   const [edad, setEdad] = useState(0)
   const [nombre, setNombre] = useState("Martin")
   const [apellidos, setApellidos] = useState("San Jose")
  */

/*
class Clock extends Component {
  constructor(props) {
    super(props);
    // Estado privado del component
    this.state = {
      // Se genera una fecha como estado inicial del componente
      fecha: new Date(),
      edad: 0,
      nombre: "Martin",
      apellidos: "San Jose"
    };
  }
  componentDidMount(){
    this.timerID = setInterval (
      () => this.tick(), 1000
    );
  }
  componentWillUnmount() {
    clearInterval (this.timerID);
  }
  render() {
    return (
      <div>
        <h2>
          Hora Actual:
          {this.state.fecha.toLocaleTimeString()}
        </h2>
        <h3>{this.state.nombre} {this.state.apellidos}</h3>
        <h1>Edad: {this.state.edad}</h1>
      </div>
    )
  }
  tick(){
    this.setState((prevState) => {
      let edad = prevState.edad +1;
      return {
        ...prevState,
        fecha: new Date(),
        edad
      }
    });
  }
}
export default Clock;
*/