import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ label, value }) => (
  <>
    <p>
      {label}:<span>{value}</span>
    </p>
  </>
);

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Statistic;
