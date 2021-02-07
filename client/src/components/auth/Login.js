import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertsContext';

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const {login, error, clearErrors, isAuthenticated} = authContext;

  const alertContext = useContext(AlertContext);
  const {setAlert} = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      // eslint-disable-next-line
      props.history.push('/');
    }
    if (error === 'Invalid email' || error === 'Invalid password') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const {email, password} = user;

  const onChange = e => setUser({...user, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({email, password});
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' value={password} onChange={onChange}/>
        </div>
        <input type='submit' value='Login' className='btn btn-primary btn-block'/>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;