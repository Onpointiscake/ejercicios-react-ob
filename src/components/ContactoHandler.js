import React from 'react';
import Contacto from './Contacto'

//componente a
export default class ContactoHandler extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isConnected : false }
        this.changeUserStatus = this.changeUserStatus.bind(this);
    }    

    changeUserStatus() {
        if(this.state.isConnected) {this.setState({ isConnected : false })}
        else if (!this.isConnected) {this.setState({ isConnected : true })}
        console.log(this.state.isConnected)
    }

    render() {
        return (
            <div>
                <h3>hola</h3>
                    <Contacto nombre={"Javier"} apellido={"Suarez"} email={"tigour7777@gmail.com"}
                          conectado={this.state.isConnected ? 'Contacto en Línea' : 'Contacto No Disponible' } />   
                    <button onClick={this.changeUserStatus}>Change User Status</button>
            </div>
        )
    }
}