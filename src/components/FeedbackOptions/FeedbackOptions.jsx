import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedback_list}>
      <li>
        <button
          className={css.btn}
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
          className={css.btn}
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
          className={css.btn}
          type="button"
          onClick={() => {
            onLeaveFeedback(options.bad);
          }}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};
