import { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { Statistic } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStatistic = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    let total = this.state.good + this.state.bad + this.state.neutral;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const totalValue = this.countTotalFeedback();
    let positiveValaue = Math.round((this.state.good * 100) / totalValue) || 0;
    return positiveValaue;
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveValaue = this.countPositiveFeedbackPercentage();
    return (
      <Layout>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={{
              good: 'good',
              neutral: 'neutral',
              bad: 'bad',
            }}
            onLeaveFeedback={this.updateStatistic}
          />
          {total >= 1 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positiveValaue}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Layout>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
