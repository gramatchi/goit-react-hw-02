import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = Object.values(feedback).reduce(
    (sum, value) => sum + value,
    0
  );

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options options={feedback} handleClick={updateFeedback} />
      {totalFeedback ? <Feedback feedback={feedback} /> : <Notification />}
    </>
  );
}

export default App;
