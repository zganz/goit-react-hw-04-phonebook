import React from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import {ContactList} from './Contactlist/Contactlist';

export class App extends React.Component {
  state = {
    contacts: [],
  };

  handlePhonebookFormSubmit = data => {
    console.log(this.state);
    this.setState({
      contacts: [...this.state.contacts, data],
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.handlePhonebookFormSubmit} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
