import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
// import Statistic from './Statistic/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export default class App extends Component {
  // static defaultProps = {
  //   step: 1,
  // };

  // static propTypes = {
  //   step: PropTypes.number,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = ({ target }) => {
    const { name } = target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const likes = Object.values(this.state);
    const feedback = likes.reduce((acc, value) => acc + value, 0);
    return feedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good < 1 ? 0 : Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // options={}
            onLeaveFeedback={this.handleIncrement}
          />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
