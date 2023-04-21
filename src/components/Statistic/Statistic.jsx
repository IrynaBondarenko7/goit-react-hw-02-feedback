import css from './Statistic.module.css';
export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={css.stat_title}>Statistic</p>
      <ul className={css.stat_list}>
        <li>
          <p className={css.stat_item_text}>
            Good :<span className={css.stat_result}>{good}</span>
          </p>
        </li>
        <li>
          <p className={css.stat_item_text}>
            Neutral :<span className={css.stat_result}>{neutral}</span>
          </p>
        </li>
        <li>
          <p className={css.stat_item_text}>
            Bad : <span className={css.stat_result}>{bad}</span>
          </p>
        </li>
      </ul>
      <p className={css.total_result}>
        Total <span className={css.stat_result}>{total}</span>
      </p>
      <p className={css.positive_result}>
        Positive feedback :{' '}
        <span className={css.stat_result}>{positivePercentage}%</span>
      </p>
    </>
  );
};
