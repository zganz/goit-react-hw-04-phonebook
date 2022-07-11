import PropTypes from 'prop-types';
// import s from './ContactList.module.css';

export const Contact = ({ name, number, id }) => {
  return <li key={id}>{`${name}: ${number}`}</li>;
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
