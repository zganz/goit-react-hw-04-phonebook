import React from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactList } from './Contactlist/Contactlist';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlePhonebookFormSubmit = data => {
    const { name } = data;
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState({
      contacts: [...this.state.contacts, data],
    });
  };

  handleFilterChange = value => {
    this.setState({ filter: value });
  };

  getContacts = () => {
    return this.state.filter === ''
      ? this.state.contacts
      : this.state.contacts.filter(({ name }) =>
          name.toLowerCase().includes(this.state.filter.toLowerCase())
        );
  };

  handleDelete = id => {
    const updContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updContacts });
  };

  render() {
    return (
      <div
        style={{
          marginLeft: '60px',
        }}
      >
        <h1 style={{ marginLeft: '60px' }}>Phonebook</h1>
        <PhonebookForm onSubmit={this.handlePhonebookFormSubmit} />
        <h3 style={{ marginLeft: '120px' }}>Search</h3>
        <Filter
          value={this.state.filter}
          handleChange={this.handleFilterChange}
        />
        <h1 style={{ marginLeft: '70px' }}>Contacts</h1>
        <ContactList
          contacts={this.getContacts()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
