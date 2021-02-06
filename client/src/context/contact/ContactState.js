import React, {useReducer} from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  CLEAR_FILTER,
  FILTER_CONTACTS,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Adam Tomys',
        email: 'adam@gmail.com',
        phone: '564-564-564',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Natalia Tomys',
        email: 'natalia@gmail.com',
        phone: '751-963-054',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Marcin Nowak',
        email: 'marcin@gmail.com',
        phone: '852-000-630',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = 4;
    dispatch({type: ADD_CONTACT, payload: contact});
  };

  // Delete contact
  const deleteContact = id => {
    dispatch({type: DELETE_CONTACT, payload: id});
  };

  // Set current contact
  const setCurrent = contact => {
    dispatch({type: SET_CURRENT, payload: contact});
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT});
  };

  // Update contact
  const updateContact = contact => {
    dispatch({type: UPDATE_CONTACT, payload: contact});
  };

  // Filter contacts
  const filterContacts = text => {
    dispatch({type: FILTER_CONTACTS, payload: text});
  };

  // Clear filters
  const clearFilter = () => {
    dispatch({type: CLEAR_FILTER});
  };

  return (
    <ContactContext.Provider value={{
      contacts: state.contacts,
      current: state.current,
      filtered: state.filtered,
      addContact,
      deleteContact,
      setCurrent,
      clearCurrent,
      updateContact,
      filterContacts,
      clearFilter,
    }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;