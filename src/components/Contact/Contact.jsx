import PropTypes from 'prop-types';
// import s from './ContactList.module.css';

export const Contact = ({ name, number}) => {

return (
        <li >
            <span >{name}: </span>
            <span>{number}</span>

        </li>
)
}

Contact.propTypes = {
name: PropTypes.string.isRequired,
number: PropTypes.string.isRequired,


}