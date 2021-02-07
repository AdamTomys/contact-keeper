import React, {useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AlertContext from '../../context/alert/alertsContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const authContext = useContext(AuthContext);
  const {register, error, clearErrors, isAuthenticated} = authContext;

  const alertContext = useContext(AlertContext);
  const {setAlert} = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      // eslint-disable-next-line
      props.history.push('/');
    }
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const {name, email, password, password2} = user;

  const onChange = e => setUser({...user, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Password</label>
          <input type='password' name='password' value={password} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Confirm Password</label>
          <input type='password' name='password2' value={password2} onChange={onChange} />
        </div>
        <input type='submit' value='Register' className='btn btn-primary btn-block'/>
      </form>
    </div>
  );
};

Register.propTypes = {};

export default Register;