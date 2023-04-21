import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback(options.good);
            }}
          >
            Good
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback(options.neutral);
            }}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback(options.bad);
            }}
          >
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};
FeedbackOptions.propTypes = {
  items: PropTypes.shape({}),
};
