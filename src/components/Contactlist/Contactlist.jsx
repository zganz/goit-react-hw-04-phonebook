// import PropTypes from 'prop-types';
import {Contact} from './Contact/Contact';

export const ContactList = ({contacts}) => {
return (
<ul>
   {contacts.map(contact => 
   <Contact
   name={contact.name} 
   number={contact.number} />)}
</ul>


   );
};

