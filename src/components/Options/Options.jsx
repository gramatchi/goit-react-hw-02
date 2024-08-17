import s from "./Options.module.css";

const Options = ({ options, handleClick, totalFeedback, resetFeedback }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {Object.keys(options).map((item) => (
          <li key={item}>
            <button onClick={() => handleClick(item)}>{item}</button>
          </li>
        ))}
        {totalFeedback ? <button onClick={resetFeedback}>Reset</button> : null}
      </ul>
    </div>
  );
};

export default Options;
