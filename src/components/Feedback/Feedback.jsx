import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.container}>
      <ul>
        {Object.entries(feedback).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <div>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
      </div>
    </div>
  );
};

export default Feedback;
