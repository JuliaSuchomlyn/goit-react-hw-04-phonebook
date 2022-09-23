import PropTypes from 'prop-types';
import { ContactItem } from "./ContactsItem.styled"

export const ContactsItem = ({ name, number, deleteContacts }) => {
    return (
        <ContactItem>
            {name}: {number}
                    <button
                    type="button"
                    onClick={deleteContacts}
                    > Delete</button>
        </ContactItem>
    )
}
ContactsItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContacts: PropTypes.func.isRequired,
}