
import PropTypes from 'prop-types';
import { ContactsItem } from "../ContactsItem/ContacsItem";
import { ContactsCatalogue } from "./ContactsList.styled";

export const ContactsList = ({ contacts, deleteContacts }) => {
    return (
        <ContactsCatalogue>
            {contacts.map(({ id, name, number }) => (
                <ContactsItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    deleteContacts={() => deleteContacts(id)}
                >
                </ContactsItem>
            ))}
        </ContactsCatalogue>
    )
}
ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
    deleteContacts: PropTypes.func.isRequired,
}


