import PropTypes from 'prop-types';
import React from 'react';
 
// componente b
export default class Contacto extends React.Component {
    render(props) {
        return (
            <div>
                <p>Nombre: {this.props.nombre} </p>
                <p>Apellido: {this.props.apellido} </p>
                <p>Email: {this.props.email}</p>
                <p>Conectado: {this.props.conectado}</p>
            </div>
        )
    }
}

Contacto.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
}
Contacto.defaultProps = {
    nombre: 'Javier',
    apellido: 'Suarez',
    email: 'email@example.com',
    conectado: false
}