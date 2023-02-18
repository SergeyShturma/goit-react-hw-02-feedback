import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <h2 className={css.title}>Please leave feedback</h2>
    <div className={css.options}>
      {options.map(option => (
        <button
          className={css.button}
          type="button"
          // data-feedback={option}
          onClick={onLeaveFeedback}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
