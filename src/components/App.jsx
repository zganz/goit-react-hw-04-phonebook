import React from 'react';
// import {Form} from './Form/Form';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
}


render() {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={this.formSubmit} />
      {/* <h2>Contacts</h2>
      <Filter value={this.state.filter} onChange={this.onChangeFilter} />
      <ContactList
        contacts={this.returnFilteredContacts()}
        onDelete={this.deleteContact}
      /> */}
    </div>
  );
}
