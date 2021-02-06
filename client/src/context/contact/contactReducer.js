import {ADD_CONTACT, CLEAR_FILTER, FILTER_CONTACTS, UPDATE_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    default:
      return state;
  }
};