import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('http://localhost:5000/api/users', formData, config);
      dispatch({type: REGISTER_SUCCESS, payload: res.data});
    } catch (err) {
      dispatch({type: REGISTER_FAIL, payload: err.response.data.msg});
    }
  };

  // Login User

  // Logout

  // Clear errors

  return (
    <AuthContext.Provider value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      error: state.error,
      user: state.user,
      register,
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.object,
};

export default AuthState;