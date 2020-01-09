import React from 'react';
import PropTypes from 'prop-types';
// import Statistics from '../Statistics/Statistics';
// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

const Section = ({ title, children }) => (
  <>
    <h1>{title}</h1>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
