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

  haveDublicats = (contacts, data) => {
    const alert = contacts.some(contact => contact.name === data.name);
    return alert(`${data.name} is already in contacts`);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.handlePhonebookFormSubmit} />
        <h3>Search</h3>
        <Filter
          value={this.state.filter}
          handleChange={this.handleFilterChange}
        />
        <h1>Contacts</h1>
        <ContactList contacts={this.getContacts()} />
      </div>
    );
  }
}
