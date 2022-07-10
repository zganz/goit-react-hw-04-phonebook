import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './form.module.css';

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className={css.form}>
        <label className={css.label}>
          Имя
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Номер
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Добавить контакт</button>
      </form>
    );
  }
}
