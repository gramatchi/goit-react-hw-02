const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <>
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
    </>
  );
};

export default Feedback;
