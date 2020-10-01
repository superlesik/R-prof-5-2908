import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";

const Contacts = (props) => {
    const contactsItem = props.contacts.map(contact => <li key={contact.id}
                                                           onClick={() => props.addChat(contact.id, contact.name)}>- {contact.name}
        <Fab size="small" color="secondary" aria-label="add">
            <AddIcon/>
        </Fab>
    </li>)

    return (
        <div className='contacts'>
            <div>
                <p>Contacts:</p>
                <ul>
                    {contactsItem}
                </ul>
            </div>
            <Button variant="contained" color="secondary" onClick={() => props.toggleContactList()}>
                ОК
            </Button>
        </div>
    )
}

export default Contacts