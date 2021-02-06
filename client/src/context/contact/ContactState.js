import React, {useReducer} from "react";
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {ADD_CONTACT, CLEAR_FILTER, FILTER_CONTACTS, UPDATE_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Adam Tomys',
        email: 'adam@gmail.com',
        phone: '564-564-564',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Natalia Tomys',
        email: 'natalia@gmail.com',
        phone: '751-963-054',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Marcin Nowak',
        email: 'marcin@gmail.com',
        phone: '852-000-630',
        type: 'professional'
      }
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = 4;
    dispatch({ type: ADD_CONTACT, payload: contact});
  }

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filters

  return (
    <ContactContext.Provider value={{
      contacts: state.contacts,
      addContact
    }}>
      {props.children}
    </ContactContext.Provider>
  )
};

export default ContactState;