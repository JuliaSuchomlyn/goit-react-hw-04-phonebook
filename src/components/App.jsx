import React from 'react';
import { nanoid } from "nanoid";
import { Form } from './Form/Form';
import { ContactsList } from "./ContactsList/ContactsList"
import { Filter } from './Filter/Filter';

export class App extends React.Component {
    state = {
        contacts: [
                {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
                {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
                {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
                {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: ""
    }
    
    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts)
        if (parsedContacts) {
            this.setState({ contacts: parsedContacts });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
    }

    formSubmitHandler = (contactsFormState) => {
        // console.log(contactsFormState)
        const { name, number } = contactsFormState;
            const contact = {
            id: nanoid(),
            name: name,
            number: number
        };
        // console.log(contact)

        const isRepeat = this.state.contacts.find(
            ({ name }) => name.toLowerCase() === contactsFormState.name.toLowerCase());
        isRepeat
            ? alert(`${name} is already in contacts`)
            : this.setState(({contacts}) => ({
                contacts: [contact, ...contacts],
        }));
        
    }

    changeFilter = e => {
        this.setState({
            filter: e.currentTarget.value,
        })
        console.log(e.currentTarget.value, this.state)
    }

    deleteContacts = (contactId) => {
        this.setState(({contacts}) => ({
        contacts: contacts.filter(({ id }) => id !== contactId),
        }));
    };



    render() {
        const { filter, contacts } = this.state;

        const normalizedFilter = filter.toLowerCase();
        const visibleContacts = contacts.filter((contacts) =>
            contacts.name.toLowerCase().includes(normalizedFilter)
        );
    
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
          <div className='container__element'>
              <h2>Phonebook</h2>
              <Form onSubmit={this.formSubmitHandler} />
              <h2>Contacts</h2>
              <Filter filter={filter}
                  onChange={this.changeFilter } />
              <ContactsList
                  contacts={visibleContacts}
                  deleteContacts={this.deleteContacts}
              />
          </div>
      </div>
    )
    }
}