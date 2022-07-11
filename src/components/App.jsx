import React from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactList } from './Contactlist/Contactlist';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [],
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
