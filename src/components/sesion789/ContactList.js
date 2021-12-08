/**
 En este ejercicio de React JS deberéis crear una lista, esta lista tendrá dentro
distintos contactos y deberá cumplir con las siguientes funcionalidades:

Mostrar contacto. (Hecho)
Crear contacto. (Hecho)
Eliminar contacto. (Hecho)
Cambiar el estado del contacto entre Conectado y Desconectado. (Hecho)
 */
import React, { useState } from 'react';
import Contact from './Contact'

const ContactList = () => {

    const [contacts, setContacts] = useState (
        [{ name: 'Javier', connected: false }, {name: 'Saray', connected: false}, 
           {name: 'Eduardo', connected: false}, {name: 'Nerea', connected: false }] )
    const [inputValue, setInputValue] = useState("")


    function createContact(event) {
        event.preventDefault();

        const newContactList = [...contacts, {name: inputValue, connected: false}]
        setContacts(newContactList)
    }   

    function deleteContact(index) {
        const newContactList = [...contacts]
        newContactList.splice(index, 1)
        setContacts(newContactList)
    }

    function toggleContactStatus(index) {
        const newContactList = [...contacts]
        !newContactList[index].connected ? (newContactList[index].connected = true) : (newContactList[index].connected = false)
        setContacts(newContactList)
    }

    return (
        <div>
            <form onSubmit={createContact}>
                <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="añade un contacto" />
                <button>Enviar</button>
            </form>
            {contacts.map((contact, index) => (
                 <Contact key={index} index={index} contact={contact} deleteFunction={deleteContact} toggleContactStatus={toggleContactStatus} />
            ))}
        </div>
    )
}

export default ContactList