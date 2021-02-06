import React from 'react';
import PropTypes from 'prop-types';

const About = () => {
  return (
    <div>
      <h1>About this app</h1>
      <p className="my-1">
        This is a full stack React app for keeping contacts
      </p>
      <p className="bg-dark p">
        <strong>Version: 0.0.1</strong>
      </p>
    </div>
  );
};

About.propTypes = {};

export default About;