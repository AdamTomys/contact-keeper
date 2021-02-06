import React, {useReducer} from 'react';
import AlertContext from './alertsContext';
import alertReducer from './alertReducer';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

const AlertState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = shortid.generate();
    dispatch({type: SET_ALERT, payload: {msg, type, id}});

    setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout);
  };

  // Remove alert

  return (
    <AlertContext.Provider value={{
      alerts: state,
      setAlert,
    }}>
      {props.children}
    </AlertContext.Provider>
  );
};

AlertState.propTypes = {
  children: PropTypes.object,
};

export default AlertState;