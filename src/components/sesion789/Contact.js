const Contact = ( {contact, index, deleteFunction, toggleContactStatus } ) => {

    function showConnectionStatus(contactStatus) {
        return (
            !contactStatus ? ('Offline') : ('Online')
               )
    }

    return (
        <div>
            <li>{contact.name}</li>
            <button onClick={() => deleteFunction(index)}>X</button>
            <button onClick={() => toggleContactStatus(index)}>{showConnectionStatus(contact.connected)}</button>
        </div>
    )

}

export default Contact