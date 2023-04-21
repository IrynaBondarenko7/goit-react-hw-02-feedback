export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>Statistic</p>
      <ul>
        <li>
          <p>
            Good :<span>{good}</span>
          </p>
        </li>
        <li>
          <p>
            Neutral :<span>{neutral}</span>
          </p>
        </li>
        <li>
          <p>
            Bad : <span>{bad}</span>
          </p>
        </li>
      </ul>
      <p>
        Total <span>{total}</span>
      </p>
      <p>
        Positive feedback : <span>{positivePercentage}%</span>
      </p>
    </>
  );
};
