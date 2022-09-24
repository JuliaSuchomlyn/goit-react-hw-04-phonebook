import PropTypes from 'prop-types';
import {useState} from 'react';
import { FormLabel, FormRequest } from './Form.styled';

export const Form = ({formSubmitHandler}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                break;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        formSubmitHandler(name, number);
        setName('');
        setNumber('');
    };
        return ( 
            <FormRequest onSubmit={handleSubmit} >
                <FormLabel> Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleChange}
                    />                    
                </FormLabel>
                <FormLabel > Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleChange}
                        />
                </FormLabel>

                <button type="submit">Add contact</button>
            </FormRequest>
        );
    }

Form.propTypes = {
    formSubmitHandler: PropTypes.func.isRequired
}