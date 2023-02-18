import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import css from 'components/App.module.css';
import Statistics from 'components/Statistics/Statistics';

const options = ['good', 'bad', 'neutral'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const elem = e.target.innerText.toLowerCase();
    this.setState(prevState => ({
      [elem]: prevState[elem] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbackCount = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.main}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedbackCount}
          positivePercentage={positiveFeedback}
        />
      </div>
    );
  }
}

export default App;
