import React, {useContext, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const {filterContacts, clearFilter, filtered} = contactContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input ref={text} type="text" placeholder="Filter Contacts..." onChange={onChange}/>
    </form>
  );
};

ContactFilter.propTypes = {};

export default ContactFilter;