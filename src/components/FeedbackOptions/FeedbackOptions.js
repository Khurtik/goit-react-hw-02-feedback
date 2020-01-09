import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button type="button" onClick={onLeaveFeedback} name="good">
      Cood
    </button>
    <button type="button" onClick={onLeaveFeedback} name="neutral">
      Neutral
    </button>
    <button type="button" onClick={onLeaveFeedback} name="bad">
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
