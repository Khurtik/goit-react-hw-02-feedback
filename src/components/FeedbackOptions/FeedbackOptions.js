import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button
      className={styles.button}
      type="button"
      onClick={onLeaveFeedback}
      name="good"
    >
      Cood
    </button>
    <button
      className={styles.button}
      type="button"
      onClick={onLeaveFeedback}
      name="neutral"
    >
      Neutral
    </button>
    <button
      className={styles.button}
      type="button"
      onClick={onLeaveFeedback}
      name="bad"
    >
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
