// import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <Contact name={name} number={number} id={id} />
      ))}
    </ul>
  );
};
